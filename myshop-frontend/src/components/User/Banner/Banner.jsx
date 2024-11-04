import React from 'react';
import './Banner.css'; // Nhập CSS cho Banner nếu cần

function Banner() {
    return (
        <section className="banner">
            <img src="assets/images/banner.jpg" alt="Banner Image" className="banner-img" />
            <div className="banner-content">
                <h2>Cosmopolis</h2>
                <hr className="custom-line" />
                <p>Quisque sodales suscipit tortor odio commodo ut comodo lacus malesuada malesuada elemen divena kenasus.</p>
                <a href="#" className="shop-now">Shop Now</a>
            </div>
        </section>
    );
}

export default Banner;
