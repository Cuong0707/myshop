import React, { useState } from 'react';
import './CheckoutPage.css'
import { useCart } from '../../../context/CartContext';
const CheckoutPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }
    const { cart } = useCart();
    return (
        <>
            <div className="dropdown-products">
                <button onClick={toggleMenu} className='btn-checkout-products'>
                    ☰
                    <span>Hide/Show Order Summary</span>
                </button>
                <div className={`checkout-products ${isOpen ? 'open' : ''}`}>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.productId}>
                                <div className='group-product-checkout'>
                                    <div className='img-product-checkout'>
                                        <img src={item.imageUrl} alt={item.name} />
                                        <div className="quantity-product-checkout">
                                            <p>{item.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="name-product-checkout">
                                        <p>{item.name}</p>
                                        <p>{item.description}</p>
                                        <span>Size: ...</span>
                                    </div>
                                    <div className='price-product-checkout'>
                                        <p>${item.price}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="checkout-container">
                <form action="/checkout" className="checkout-form checkout-colunm">
                    {/* Điền thông tin */}
                    <div className="left-colunm">
                        <div className="checkout-info">
                            <div className="header-checkout-info">
                                <img src="/assets/images/ella.jpg" alt="Ella Fashion Store Logo" class="logo-img"/>
                            </div>
                            <div className="content-checkout-info">
                                <div className="contact-info">
                                    <label >Contact Infomation</label>
                                    <input type="email" placeholder='Your email' />
                                    <div className='checkout-checkbox'>
                                        <input type="checkbox" />
                                        <p>Keep me up to date on news and exclusive offers</p>
                                    </div>
                                </div>
                                <div className="shipping-address">
                                    <label >Shipping Address</label>
                                    <div className="fullname">
                                        <input type="text" name="" id="firstname" placeholder='First name' />
                                        <input type="text" name="" id="" placeholder='Last name' />
                                    </div>
                                    <input type="text" placeholder='Full address' />
                                    <input type="text" placeholder='Your phone' />
                                </div>
                                <button>Continue to shipping</button>
                            </div>
                        </div>
                    </div>
                    {/* phần hiển thị sản phẩm trong giỏ hàng */}
                    <div className="right-colunm">
                        <div className='checkout-products'>
                            <ul>
                                {cart.map((item) => (
                                    <li key={item.productId}>
                                        <div className='group-product-checkout'>
                                            <div className='img-product-checkout'>
                                                <img src={item.imageUrl} alt={item.name} />
                                                <div className="quantity-product-checkout">
                                                    <p>{item.quantity}</p>
                                                </div>
                                            </div>
                                            <div className="name-product-checkout">
                                                <p>{item.name}</p>
                                                <p>{item.description}</p>
                                                <span>Size: ...</span>
                                            </div>
                                            <div className='price-product-checkout'>
                                                <p>${item.price}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
};

export default CheckoutPage;