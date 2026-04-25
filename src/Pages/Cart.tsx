import { useContext } from "react";
import { CartContext } from "../Pages/CartContext";
import "./Cart.css";

const Cart = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;

  const { cart, removeFromCart } = cartContext;
  
  console.log("cart items:", cart);
  const total = cart.reduce((acc, item) => {
    return acc + Number(item.price);
    
  }, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Oops 😕 you have no item in your cart.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>

              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ${total}</h3>
          <button className="paymentbtn">Click for payment</button>
        </>
      )}
    </div>
  );
};

export default Cart;