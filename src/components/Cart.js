import React, { useContext } from "react";
import { cartContext } from "../GlobalState/CartContext";
import { decrement, deleteProduct, increment } from "../actions";

const Cart = () => {
  const { shoppingCart, dispatch, qty, totalPrice } = useContext(cartContext);

  return (
    <div className="container">
      <h1 className="main-heading">Shopping Cart</h1>
      <div className="cart-container">
        {shoppingCart.length ? (
          shoppingCart.map((product) => (
            <div className="each-product" key={product.id}>
              <div className="img-cont">
                <img
                  src={product.image}
                  alt="not-found"
                  className="responsive-img"
                />
              </div>
              <div className="prod-name">{product.name}</div>
              <div className="prod-price">${product.price}.00</div>
              <div className="prod-cta">
                <p
                  className=""
                  onClick={() => dispatch(increment(product.id))}
                > add </p>
                <span className="cart-quantity">{product.qty}</span>
                <p
                  className="fas fa-minus"
                  onClick={() => dispatch(decrement(product.id))}
                > sub </p>
              </div>
              <div className="total-prod-price">
                ${product.price * product.qty}
              </div>
              <div className="total-prod-price">
                <i
                  className="fas fa-trash-alt"
                  onClick={() => dispatch(deleteProduct(product.id))}
                > delete </i>
              </div>
            </div>
          ))
        ) : (
          <span>No Product Found</span>
        )}
      </div>
      {shoppingCart.length > 0 ? (
        <div className="cart-summry">
          <div className="summary">
            <h3>Cart Summry</h3>
            <div className="pay-total-items">
              <div className="items">Total Items</div>
              <div className="items-count">{qty}</div>
            </div>
            <div className="total-price-section">
              <div className="title">Total Price</div>
              <div className="items-price">${totalPrice}.00</div>
            </div>

          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Cart;
