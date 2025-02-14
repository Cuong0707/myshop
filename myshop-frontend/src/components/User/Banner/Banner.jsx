import React from 'react';
import './Banner.css'; 

function Banner() {
    return (
        <section className="banner">
            <img src="assets/images/banner.jpg" alt="Banner" className="banner-img" />
            <div className="banner-content">
                <h2>Cosmopolis</h2>
                <hr className="custom-line" />
                <p>Quisque sodales suscipit tortor odio commodo ut comodo lacus malesuada malesuada elemen divena kenasus.</p>
                <a href="/shop" className="shop-now">Shop Now</a>
            </div>
        </section>
    );
}

export default Banner;
