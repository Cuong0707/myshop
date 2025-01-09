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
          <ul className="list-cart">
            {cart.map((item) => (
              <li key={item.productId} className="products-cart">
                <div className="title-product-cart">
                  <img className="img-product-cart" src={item.imageUrl} />
                  <div className="name-item-temp">
                    {item.name}
                  </div>
                </div>
                <div className="info-product-cart">
                  <div className="name-item-cart">
                    <div className="label-temp">{item.name}</div>
                  </div>
                  <div>
                    <div className="label-temp">Price: </div>
                    <strong>${item.price}</strong>
                  </div>
                  <div>
                    <div className="label-temp">Quantity: </div>
                    <strong>{item.quantity}</strong>
                  </div>
                  <div className="total-product-cart">
                    <div className="label-temp">Total:</div>
                    <strong>${item.price * item.quantity}</strong>
                  </div>
                  <button className="remove-cart" onClick={() => removeFromCart(item.productId)}>Remove</button>

                </div>
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