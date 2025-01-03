import React from 'react';
import './Item.css'; 
import { useCart } from '../../../context/CartContext';
function Product({ title, name, price, image }) {
    const { addToCart} = useCart();
    const product = [{
        "title" : title,
        "name" : name,
        "price" : price,
        "image" : image
    }];

    return (
        <div className="product">
            <div className="main-image">
                <div className="item-image">
                    <img loading="lazy" src={image} alt={title} />    
                </div>
                <img src="assets/images/favoriteicon.jpg" alt="Favorite Icon" className="overlay-image" />
                <div className="selection">
                    <button className="add-to-cart" onClick={addToCart(product)}>Add to Cart</button>
                    <div className="submit" style={{ display: 'none' }}>
                        <p className="title-submit">Size</p>
                        <p>XS   S   M   L   XL  2X</p>
                        <button className="btn-submit">Submit</button>
                    </div>
                </div>
            </div>
            <p className="product-title">{title}</p>
            <p className="product-name">{name}</p>
            <p className="price">{price}</p>
        </div>
    );
}

export default Product;
