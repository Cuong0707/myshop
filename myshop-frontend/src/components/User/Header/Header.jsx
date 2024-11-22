import React from 'react';
import './Header.css'; // Nhập CSS cho Header nếu cần

function Header() {
    const handleMenuToggle = () => {
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
    };

    return (
        <header>
            <div className="top-bar">
                <div className="scrolling-bar">
                    <div className="scrolling-content">
                        <p>SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR <strong>$1/MONTH</strong></p>
                        <p>SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR <strong>$1/MONTH</strong></p>
                        <p>SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR <strong>$1/MONTH</strong></p>
                    </div>
                </div>
            </div>
            <div className="bottom-bar">
                <a href="#" className="logo">
                    <img src="assets/images/ella.jpg" alt="Ella Fashion Store Logo" className="logo-img" />
                </a>
                <div className="user-actions">
                    <p>FREE SHIPPING ON ALL ORDERS. NO MINIMUM PURCHASE</p>
                    <a href="#">
                        <img src="assets/images/cardicon.jpg" alt="Card Icon" />
                        Shopping Cart
                    </a>
                    <a href="#">
                        <img src="assets/images/favoriteicon.jpg" alt="Favorite Icon" />
                        My Wish lists
                    </a>
                    <a href="/signup">Sign in or Create an account</a>
                </div>
            </div>
            <nav className="main-nav">
                <div className="menu-toggle" onClick={handleMenuToggle}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="menu" id="menu">
                    <li><a href="#">New In</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Lookbook</a></li>
                    <li><a href="#">Demo</a></li>
                    <li><a href="#">Shop Instagram</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Brands</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
