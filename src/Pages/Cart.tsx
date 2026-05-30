import { useContext } from "react";
import { CartContext } from "../Pages/CartContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const cartContext = useContext(CartContext);

  const navigate = useNavigate();

  if (!cartContext) return null;

  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = cartContext;

  // TOTAL
  const total = cart.reduce(
    (acc, item) =>
      acc + item.price * (item.quantity || 1),
    0
  );

  // CHECKOUT
  const handleCheckout = () => {

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const existingOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    const newOrder = {
      id: Date.now(),
      items: cart,
      total,
      status: "Processing",
      date: new Date().toLocaleString(),
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([
        ...existingOrders,
        newOrder,
      ])
    );

    alert("Order placed successfully!");

    navigate("/payment");
  };

  return (
    <div className="cart-container">

      <h2>Your Cart 🛒</h2>

      {cart.length === 0 ? (

        <p className="empty-cart">
          No items in cart
        </p>

      ) : (

        <>

          {cart.map((item) => (

            <div
              key={item.id}
              className="cart-item"
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-details">

                <h3>{item.name}</h3>

                <p>
                  ₦{item.price}
                </p>

                {/* QUANTITY */}
                <div className="qty-box">

                  <button
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQty(item.id)
                    }
                  >
                    +
                  </button>

                </div>

                <p>
                  Total:
                  ₦
                  {item.price *
                    (item.quantity || 1)}
                </p>

              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                Remove
              </button>

            </div>

          ))}

          <div className="cart-summary">

            <h2>Total: ₦{total}</h2>

            <button
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Checkout
            </button>

          </div>

        </>

      )}

    </div>
  );
};

export default Cart;