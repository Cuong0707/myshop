import React from 'react';
import './NewArrivals.css'; // Nhập CSS cho NewArrivals nếu cần
import Product from '../Product/Product';

function NewArrivals() {
    const products = [
        { title: "SODLING", name: "Nominoise Demenoisa", price: "$88.00 - $98.00", image: "assets/images/item1.jpg" },
        { title: "TOMORROW", name: "Dinanderium Pretum", price: "$130.00 - $180.00", image: "assets/images/item2.jpg" },
        { title: "PAUL SMITH", name: "Magoria Demaratin", price: "$88.00", image: "assets/images/item3.jpg" },
        { title: "DONATELLO", name: "Magoria Demaratin", price: "$88.00", image: "assets/images/item4.jpg" }
    ];

    const handleAddToCart = (button) => {
        // Logic thêm sản phẩm vào giỏ hàng
        console.log("Added to cart", button);
    };

    return (
        <section className="new-arrivals">
            <div className="title-arrivals">
                <hr /><h2>New Arrivals</h2><hr />
            </div>
            <div className="products">
                {products.map((product, index) => (
                    <Product key={index} {...product} onAddToCart={handleAddToCart} />
                ))}
            </div>
            <button class="show-more">Show More</button>
        </section>
    );
}

export default NewArrivals;
