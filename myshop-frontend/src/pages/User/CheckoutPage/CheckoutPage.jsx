import React from 'react';
import './CheckoutPage.css'
import { useCart } from '../../../context/CartContext';
const CheckoutPage = () => {
    const {cart} = useCart();
    return (
        <div>
            <div className="checkout-container">
                <form action="/checkout" className="checkout-form checkout-colunm">
                    <div className="left-colunm">
                        Left colunm
                    </div>
                    <div className="right-colunm">
                        <div className="checkout-products">
                            {cart.map((item)=>(
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;