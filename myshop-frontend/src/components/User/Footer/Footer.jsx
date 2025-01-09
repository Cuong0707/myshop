import React from 'react';
import './Footer.css'; 

function Footer() {
    console.log("render...");
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="shop">
                    <h1>shop</h1>
                    <h2>New In</h2>
                    <h2>Women</h2>
                    <h2>Men</h2>
                    <h2>Shoes</h2>
                    <h2>Bags & Accessories</h2>
                    <h2>Top Brands</h2>
                    <h2>Sale & Special Offers</h2>
                    <h2>Lookbook</h2>
                </div>
                <div className="information">
                    <h1>information</h1>
                    <h2>About</h2>
                    <h2>Customer Service</h2>
                    <h2>Reward Program</h2>
                    <h2>Shipping & Returns</h2>
                    <h2>Privacy Policy</h2>
                    <h2>Term & Conditions</h2>
                    <h2>Blog</h2>
                </div>
                <div className="customer">
                    <h1>Customer Service</h1>
                    <h2>Search Terms</h2>
                    <h2>Advanced Search</h2>
                    <h2>Orders and Returns</h2>
                    <h2>Contact Us</h2>
                    <h2>Theme FAQs</h2>
                    <h2>Consultant</h2>
                    <h2>Store Locations</h2>
                </div>
                <div className="newsletter">
                    <h1>newsletter sign up</h1>
                    <h2>Sign up for exclusive updates, new arrivals & insider only discoutns</h2>
                    <div className="email-form">
                        <input type="email" placeholder="Email Address" className="email-input" required/>
                        <button type="submit" className="submit-btn">SUBMIT</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <h2>&copy; 2014 Ella Demo. All Rights Reserved. Powered by Shopify. <br/> Shopify Themes by HaloThemes.com </h2>
            </div>
            
        </div>
    );
}

export default Footer;
