import React, { useState, useEffect, useRef, useCallback } from 'react';
import Item from '../Item/Item';
import './Products.css';
import DropdownMenu from '../../Global/GlobalDropdownMenu/DropdownMenu';
import { fetchProducts } from '../../../services/productService';

function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const loaderRef = useRef(null);

    const handleAddToCart = (button) => {
        console.log("Added to cart", button);
    };

    // Hàm tải sản phẩm
    const loadProducts = useCallback(async () => {
        if (isLoading || !hasMore) return;
        setIsLoading(true);
        try {
            const currentPage = Math.floor(products.length / 6); 
            const newProducts = await fetchProducts(currentPage, 6); // Gọi API
            const temp = newProducts.filter(
                (product) => !products.some((p) => p.productId === product.productId)
            );
            if (temp.length === 0) {
                setHasMore(false); // Không còn sản phẩm mới
            } else {
                const filteredProducts = newProducts.filter(
                    (product) => !products.some((p) => p.productId === product.productId)
                );
                if (filteredProducts.length > 0) {
                    setProducts((prev) => [...prev, ...filteredProducts]);
                }
            }
        } catch (error) {
            console.error("Failed to load products:", error);
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, hasMore, products]);

    // IntersectionObserver cho tải thêm
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    loadProducts();
                }
            },
            { threshold: 1.0 }
        );

        if (loaderRef.current && hasMore) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [hasMore, loadProducts]);

    return (
        <div className='main-product'>
            <nav className='collection-breadcrumb'>
                <p>Home Products</p>
            </nav>
            <div className="colection">
                <div className='page-sidebar'>
                    <h1>Filter</h1>
                    <DropdownMenu
                        title="Collection"
                        items={['spring', 'summer', 'autumn', 'winter']}
                        onItemClick={handleAddToCart}
                    />
                    <DropdownMenu
                        title="Collection"
                        items={['spring', 'summer', 'autumn', 'winter']}
                        onItemClick={handleAddToCart}
                    />
                    <DropdownMenu
                        title="Collection"
                        items={['spring', 'summer', 'autumn', 'winter']}
                        onItemClick={handleAddToCart}
                    />
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
                            <Item
                                key={product.productId}
                                title={product.productId}
                                price={product.price}
                                name={product.name}
                                image={product.imageUrl}
                                onAddToCart={handleAddToCart}
                            />
                        ))}
                    </div>

                    <div className="pagination-wrapper">
                        <nav className='pagination'>
                            <div ref={loaderRef} className="loading">
                                {hasMore
                                    ? isLoading
                                        ? 'Loading more products...'
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
