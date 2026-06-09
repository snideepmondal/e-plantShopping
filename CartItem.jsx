import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

const CartItem = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </button>

            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
              }
            >
              -
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartItem;
