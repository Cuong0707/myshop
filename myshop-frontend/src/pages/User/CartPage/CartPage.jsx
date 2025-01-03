import React from 'react';
import Header from '../../../components/User/Header/Header';
import Footer from '../../../components/User/Footer/Footer';
import Cart from '../../../components/User/ShoppingCart/ShoppingCart';
function ShoppingCart() {
    return (
        <div>
            <Header />
            <Cart/>
            <Footer />
        </div>
    );
}

export default ShoppingCart;
