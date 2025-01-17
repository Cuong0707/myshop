import React, { useState, useEffect, useRef, useCallback } from 'react';
import Item from '../Item/Item';
import './Products.css';
import DropdownMenu from '../../Global/GlobalDropdownMenu/DropdownMenu';
import { fetchProducts } from '../../../services/productService';
import { getCollections } from '../../../services/collectionService';
import { getAllBrands } from '../../../services/brandService';
import { usePopup } from '../../../context/PopupContext';
import Loading from '../../Global/ProcessLoading/Loading';
import Breadcrumb from '../../Global/Breadcrumb/Breadcrumb';
function Products() {
    const { setPopup } = usePopup();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const loaderRef = useRef(null);
    const [collections, setCollections] = useState([]);
    const [brands, setBrands] = useState([]);
    const [sortByFilter, setSortByFilter] = useState(null);
    const [sortDirFilter, setSortDirFilter] = useState(null);
    const [collectionFilter, setCollectionFilter] = useState(null);
    const [brandFilter, setBrandFilter] = useState(null);

    const handleDropdownChange = (field, value) => {
        if (field === 'sortBy') setSortByFilter(value);
        if (field === 'sortDir') setSortDirFilter(value);
        if (field === 'Collection') setCollectionFilter(value);
        if (field === 'Brand' ) setBrandFilter(value);
    };
    


    const loadCollections = useCallback(async () => {
        try {
            const collections = await getCollections()
            setCollections(collections.map((collection) => collection.collectionName));
        } catch (error) {
            console.error('Failed to load collections:', error);
        }
    }, []);

    const loadBrands = useCallback(async () => {
        try {
            const brands = await getAllBrands();
            setBrands(brands);
        } catch (error) {
            console.error('Failed to load brands:', error);
        }
    }, []);

    useEffect(() => {
        loadCollections();
        loadBrands();
    }, [loadCollections,loadBrands]);


    // Hàm tải sản phẩm
    const loadProducts = useCallback(async () => {
        if (isLoading || !hasMore) return ;
        setIsLoading(true);
        try {
            const currentPage = Math.floor(products.length / 4);
            const newProducts = await fetchProducts(currentPage, 4, sortByFilter, sortDirFilter
                , collectionFilter, brandFilter, true); 
            const uniqueProducts = newProducts.filter(
                (product) => !products.some((p) => p.productId === product.productId)
            );
            if (uniqueProducts.length === 0) {
                setHasMore(false); // Dừng tải thêm
            } else {
                setProducts((prev) => [...prev, ...uniqueProducts]);
            }
        } catch (error) {
            setPopup("Có lỗi Xảy Ra, Vui Lòng Thử Lại Sau");
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, hasMore, products,sortByFilter,
        sortDirFilter,
        collectionFilter,
        brandFilter,
        setPopup,]);
    // IntersectionObserver cho tải thêm
    useEffect(() => {
        setProducts([]);
        setIsLoading(false);
        setHasMore(true);
    }, [sortByFilter, sortDirFilter, collectionFilter, brandFilter]);
    useEffect(() => {
        const loaderElement = loaderRef.current; // Sao chép giá trị của loaderRef.current
        const observerCallback = (entries) => {
            if (entries[0].isIntersecting && hasMore && !isLoading) {
                loadProducts();
            }
        };

        const observer = new IntersectionObserver(observerCallback, { threshold: 1.0 });

        if (loaderElement && hasMore) {
            observer.observe(loaderElement);
        }

        return () => {
            if (loaderElement) {
                observer.unobserve(loaderElement); // Dùng biến cục bộ thay vì loaderRef.current
            }
            observer.disconnect();
        };
    }, [hasMore, isLoading, loadProducts]); 


    return (
        <div className='main-product'>
            <nav className='collection-breadcrumb'>
                <div><Breadcrumb/></div>
            </nav>
            <div className="colection">
                <div className='page-sidebar'>
                    <h1>Filter</h1>
                    <DropdownMenu
                        title="Collection"
                        items={collections}
                        onItemClick={handleDropdownChange}
                    />

                    <DropdownMenu
                        title="Brand"
                        items={brands.map((brand) => brand.brandName)}
                        onItemClick={handleDropdownChange}
                    />
                    {/* <DropdownMenu
                        title="Collection"
                        items={['spring', 'summer', 'autumn', 'winter']}
                        onItemClick={handleAddToCart}
                    />
                    <DropdownMenu
                        title="Collection"
                        items={['spring', 'summer', 'autumn', 'winter']}
                        onItemClick={handleAddToCart}
                    /> */}
                </div>
                <div className='page-content'>
                    <div className="articleLookbook">
                        <div className="articleLookbook-item">
                            <h1>Products</h1>
                        </div>
                    </div>
                    <toolbar-item className="toolbar">
                        <div className="toolbar-colLeft">
                            <p>View as</p>
                        </div>
                        <div className="toolbar-colRight">
                            <div className="toolbar-limiteView">
                                <p>Items per page</p>
                                <p>DROPMENU</p>
                            </div>
                            <div className="toolbar-sort">
                                <p>Sort by</p>
                                <p>DROPMENU</p>
                            </div>
                        </div>
                    </toolbar-item>
                    <div className="list-product">
                        {products.map((product) => (
                            <Item key={`product${product.productId}`} product={product} />
                        ))}
                    </div>
                    <div className="pagination-wrapper">
                        <nav className='pagination'>
                            <div ref={loaderRef} className="loading">
                                {hasMore
                                    ? isLoading
                                        ? isLoading && <Loading />
                                        : 'Scroll to load more products'
                                    : 'No more products available'}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
