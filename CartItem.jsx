import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // calculate total cart amount
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {/* CART ITEMS */}
          {cartItems.map((item) => {
            const itemTotal = item.price * item.quantity;

            return (
              <div
                key={item.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  marginBottom: "10px"
                }}
              >
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p><b>Total: ${itemTotal}</b></p>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    style={{ background: "red", color: "white" }}
                  >
                    Remove
                  </button>

                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1
                        })
                      )
                    }
                  >
                    +
                  </button>

                  <button
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity - 1
                          })
                        );
                      } else {
                        dispatch(removeItem(item.id));
                      }
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}

          {/* CART SUMMARY */}
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              borderTop: "2px solid black"
            }}
          >
            <h2>Cart Summary</h2>
            <h3>Total Amount: ${totalAmount}</h3>

            <button
              onClick={() => alert("Checkout Successful!")}
              style={{
                padding: "10px 15px",
                background: "green",
                color: "white",
                border: "none"
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;
