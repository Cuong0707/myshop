import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLoaderData } from "react-router-dom";
import Item from '../Item/Item';
import './Products.css';
import DropdownMenu from '../../Global/GlobalDropdownMenu/DropdownMenu';
import { fetchProducts } from '../../../services/productService';
import { usePopup } from '../../../context/PopupContext';
import Loading from '../../Global/ProcessLoading/Loading';
import Breadcrumb from '../../Global/Breadcrumb/Breadcrumb';

function Products() {
    const { products: initialProducts, brands: initialBrands, collections: initialCollections } = useLoaderData();

    const { setPopup } = usePopup();
    const loaderRef = useRef(null);

    const [products, setProducts] = useState(initialProducts || []);
    const [brands] = useState(initialBrands || []);
    const [collections] = useState(initialCollections?.map(c => c.collectionName) || []);
    const [price, setPrice] = useState(5000000);

    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const [sortByFilter, setSortByFilter] = useState(null);
    const [sortDirFilter, setSortDirFilter] = useState(null);
    const [collectionFilter, setCollectionFilter] = useState(null);
    const [brandFilter, setBrandFilter] = useState(null);

    const handleDropdownChange = (field, value) => {
        if (field === 'sortBy') setSortByFilter(value);
        if (field === 'sortDir') setSortDirFilter(value);
        if (field === 'Collection') setCollectionFilter(value);
        if (field === 'Brand') setBrandFilter(value);
    };

    // Reset danh sách sản phẩm khi filter thay đổi
    useEffect(() => {
        setProducts([]);
        setIsLoading(false);
        setHasMore(true);
    }, [sortByFilter, sortDirFilter, collectionFilter, brandFilter]);

    const loadProducts = useCallback(async () => {
        if (isLoading || !hasMore) return;
        setIsLoading(true);
        try {
            const currentPage = Math.floor(products.length / 4);
            const newProducts = await fetchProducts(
                currentPage, 4,
                sortByFilter,
                sortDirFilter,
                collectionFilter,
                brandFilter,
                true
            );

            const uniqueProducts = newProducts.filter(
                (product) => !products.some((p) => p.productId === product.productId)
            );

            if (uniqueProducts.length === 0) {
                setHasMore(false);
            } else {
                const combinedProducts = [...products, ...uniqueProducts];
                const sortedProducts = sortDirFilter === "ASC"
                    ? combinedProducts.sort((a, b) => a.price - b.price)
                    : sortDirFilter === "DESC"
                        ? combinedProducts.sort((a, b) => b.price - a.price)
                        : combinedProducts;

                setProducts(sortedProducts);
            }
        } catch (error) {
            setPopup("Có lỗi xảy ra, vui lòng thử lại sau.");
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, hasMore, products, sortByFilter, sortDirFilter, collectionFilter, brandFilter, setPopup]);

    useEffect(() => {
        const loaderElement = loaderRef.current;
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
                observer.unobserve(loaderElement);
            }
            observer.disconnect();
        };
    }, [hasMore, isLoading, loadProducts]);

    return (
        <div className='main-product'>
            <nav className='collection-breadcrumb'>
                <div><Breadcrumb /></div>
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

                    <DropdownMenu
                        title="Price"
                        items={[
                            <div>
                                <input
                                    type="range"
                                    min="0"
                                    max="5000000"
                                    step="100000"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    style={{ width: '100%' }}
                                />
                                <p className="price-label">${price}</p>
                            </div>
                        ]}
                        onItemClick={handleDropdownChange}
                    />
                </div>

                <div className='page-content'>
                    <div className="articleLookbook">
                        <div className="articleLookbook-item">
                            <h1>Products</h1>
                        </div>
                    </div>
                    <div className="toolbar">
                        <div className="toolbar-colLeft" />
                        <div className="toolbar-colRight">
                            <div className="toolbar-limiteView" />
                            <div className="toolbar-sort">
                                <p>Sort by: </p>
                                <select onChange={(e) => handleDropdownChange('sortDir', e.target.value)}>
                                    <option value="null">Default</option>
                                    <option value="DESC">DESC</option>
                                    <option value="ASC">ASC</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="list-product">
                        {products
                            .filter(product => product.price <= price)
                            .map(product => (
                                <Item key={`product${product.productId}`} product={product} />
                            ))}
                    </div>

                    <div className="pagination-wrapper">
                        <nav className='pagination'>
                            <div ref={loaderRef} className="loading">
                                {hasMore
                                    ? isLoading
                                        ? <Loading />
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
