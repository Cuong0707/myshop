import React from "react";
import { useCart } from "../../../context/CartContext";
import './ShoppingCart.css';
const ShoppingCart = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log(cart);
  return (
    <div className="cart">
      <ul className="title-cart">
        <li>Product</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Total</li>
      </ul>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.title} className="products-cart">
                <div className="title-product-cart">
                  <img className="img-product-cart" src={item.imageUrl}/>
                  {item.name}
                </div>
                <div>{item.price}</div>
                <div>{item.quantity}</div>
                <div className="total-product-cart">
                  ${item.price * item.quantity}
                </div>
                <button className="remove-cart" onClick={() => removeFromCart(item.productId)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
              <p className="subtotal">Subtotal: ${totalPrice}</p>
              <button>Check Out</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;