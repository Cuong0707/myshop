import React from 'react';
import Item from '../Item/Item';
import './Products.css'
function Products() {
    const linkImg = "//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_165x.jpg?v=1702883527 165w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_170x.jpg?v=1702883527 170w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_185x.jpg?v=1702883527 185w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_198x.jpg?v=1702883527 198w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_205x.jpg?v=1702883527 205w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_210x.jpg?v=1702883527 210w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_220x.jpg?v=1702883527 220w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_245x.jpg?v=1702883527 245w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_270x.jpg?v=1702883527 270w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_290x.jpg?v=1702883527 290w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_320x.jpg?v=1702883527 320w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_355x.jpg?v=1702883527 355w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_360x.jpg?v=1702883527 360w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_370x.jpg?v=1702883527 370w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_420x.jpg?v=1702883527 420w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_430x.jpg?v=1702883527 430w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_460x.jpg?v=1702883527 460w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_470x.jpg?v=1702883527 470w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_510x.jpg?v=1702883527 510w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_523x.jpg?v=1702883527 523w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_533x.jpg?v=1702883527 533w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_534x.jpg?v=1702883527 534w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_570x.jpg?v=1702883527 570w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_640x.jpg?v=1702883527 640w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_665x.jpg?v=1702883527 665w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_670x.jpg?v=1702883527 670w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_720x.jpg?v=1702883527 720w,//palessi.ae/cdn/shop/files/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_775x.jpg?v=1702883527 775w" ;
    const handleAddToCart = (button) => {
        // Logic thêm sản phẩm vào giỏ hàng
        console.log("Added to cart", button);
    };
    return (
        <div className='main-product'>
            <nav className='collection-breadcrumb'>
                <p>Home Products</p>
            </nav>
            <div className="colection">
                <div className='page-sidebar'>
                    select
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
                        <Item title={"img1"} price={"300$"} name={"hinh anh"} image={linkImg} onAddToCart={handleAddToCart}/>
                        <Item title={"img1"} price={"300$"} name={"hinh anh"} image={linkImg} onAddToCart={handleAddToCart}/>
                        <Item title={"img1"} price={"300$"} name={"hinh anh"} image={linkImg} onAddToCart={handleAddToCart}/>
                        <Item title={"img1"} price={"300$"} name={"hinh anh"} image={linkImg} onAddToCart={handleAddToCart}/>
                        <Item title={"img1"} price={"300$"} name={"hinh anh"} image={linkImg} onAddToCart={handleAddToCart}/>
                        <Item title={"img1"} price={"300$"} name={"hinh anh"} image={linkImg} onAddToCart={handleAddToCart}/>
                        <Item title={"img1"} price={"300$"} name={"hinh anh"} image={linkImg} onAddToCart={handleAddToCart}/>
                        <Item title={"img1"} price={"300$"} name={"hinh anh"} image={linkImg} onAddToCart={handleAddToCart}/>
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
        </div>
    )
}

export default Products;
