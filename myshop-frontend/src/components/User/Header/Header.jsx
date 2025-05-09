import React from 'react';
import './Header.css';
import { useCart } from '../../../context/CartContext';
function Header() {
    const { cart } = useCart();

    // Tính tổng số lượng sản phẩm
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const handleMenuToggle = () => {
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
    };
    return (
        <>
            <header>
                <div className="top-bar">
                    <div className="scrolling-bar">
                        <div className="scrolling-content">
                            <p>SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR <strong>$1/MONTH</strong></p>
                            <p>SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR <strong>$1/MONTH</strong></p>
                            <p>SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR <strong>$1/MONTH</strong></p>
                            <p>SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR <strong>$1/MONTH</strong></p>
                            <p>SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR <strong>$1/MONTH</strong></p>
                            <p>SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR <strong>$1/MONTH</strong></p>
                            <p>SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR <strong>$1/MONTH</strong></p>
                            <p>SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR <strong>$1/MONTH</strong></p>
                            <p>SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR <strong>$1/MONTH</strong></p>
                        </div>
                    </div>
                </div>
                <div className="bottom-bar">
                    <a href="/" className="logo">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/ella.jpg`} alt="Ella Fashion Store Logo" className="logo-img" />
                    </a>
                    <div className="user-actions">
                        <p>FREE SHIPPING ON ALL ORDERS. NO MINIMUM PURCHASE</p>
                        <a href="/cart">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/cardicon.jpg`} alt="Card Icon" />
                            Shopping Cart ({totalItems})
                        </a>
                        {/* <a href="/wishlist">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/favoriteicon.jpg`} alt="Favorite Icon" />
                            My Wish lists
                        </a> */}
                        <a href="/signup">Sign in or Create an account</a>
                    </div>
                </div>
            </header>
            <div className='navigation'>
                <nav className="main-nav">
                    <div className="menu-toggle" onClick={handleMenuToggle}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className="menu" id="menu">
                        <li><a href="/">New In</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/Collections">Collections</a></li>
                        <li><a href="/Blog">Blog</a></li>
                        <li><a href="/FAQs">FAQs</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;
