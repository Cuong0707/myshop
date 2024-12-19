import React, { useState, useEffect, useRef } from 'react';
import Item from '../Item/Item';
import './Products.css';
import DropdownMenu from '../../Global/GlobalDropdownMenu/DropdownMenu';
import { fetchProducts } from '../../../services/productService';
function Products() {
    const [products, setProducts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const loaderRef = useRef(null);
    const handleAddToCart = (button) => {
        // Logic thêm sản phẩm vào giỏ hàng
        console.log("Added to cart", button);
    };
    const loadProducts = async () => {
        if (isLoading) return;

        setIsLoading(true);

        try {
            const newProducts = await fetchProducts(products.length, 10); // Gọi API
            if (newProducts.length === 0) {
                setHasMore(false);
            } else {
                setProducts((prevProducts) => [...prevProducts, ...newProducts]);
            }
        } catch (error) {
            // Xử lý lỗi nếu cần
        }

        setIsLoading(false);
    };
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    loadProducts();
                }
            },
            { threshold: 1.0 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [hasMore]);
    return (
        <div className='main-product'>
            <nav className='collection-breadcrumb'>
                <p>Home Products</p>
            </nav>
            <div className="colection">
                <div className='page-sidebar'>
                    <h1>Select</h1>
                    <DropdownMenu title="Collection"
                        items={['spring', 'summer', 'autumn', 'winter']}
                        onItemClick={handleAddToCart}
                    />
                    <DropdownMenu title="Collection"
                        items={['spring', 'summer', 'autumn', 'winter']}
                        onItemClick={handleAddToCart}
                    />
                    <DropdownMenu title="Collection"
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
                        {/* {products.slice(0, visibleCount).map((product) => (
                            <div key={product.id} className="product-item">
                                {product.name}
                            </div>
                        ))}
                    </div>
                    {hasMore && (
                        <div ref={loaderRef} className="loading">
                            {isLoading ? 'Loading more products...' : 'Scroll to load more products'}
                        </div>
                    )} */}
                    <Item title={"img1"} price={"300$"} name={"hinh anh"} image={"/assets/products/set1.jpg"} onAddToCart={handleAddToCart} />
                    <Item title={"img1"} price={"300$"} name={"hinh anh"} image={"/assets/products/set1.jpg"} onAddToCart={handleAddToCart} />
                    <Item title={"img1"} price={"300$"} name={"hinh anh"} image={"/assets/products/set1.jpg"} onAddToCart={handleAddToCart} />
                    <Item title={"img1"} price={"300$"} name={"hinh anh"} image={"/assets/products/set1.jpg"} onAddToCart={handleAddToCart} />
                    <Item title={"img1"} price={"300$"} name={"hinh anh"} image={"/assets/products/set1.jpg"} onAddToCart={handleAddToCart} />
                    <Item title={"img1"} price={"300$"} name={"hinh anh"} image={"/assets/products/set1.jpg"} onAddToCart={handleAddToCart} />
                    <Item title={"img1"} price={"300$"} name={"hinh anh"} image={"/assets/products/set1.jpg"} onAddToCart={handleAddToCart} />
                    <Item title={"img1"} price={"300$"} name={"hinh anh"} image={"/assets/products/set1.jpg"} onAddToCart={handleAddToCart} />
                </div>
                <div className="pagination-wrapper">
                    <nav className='pagination'>
                        <span>Page</span>
                        <span>4/20</span>
                    </nav>
                    <button>Show More</button>
                </div>
            </div>
        </div>
        </div >
    )
}

export default Products;
