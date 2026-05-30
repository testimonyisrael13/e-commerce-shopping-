import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import { CartContext } from "./CartContext";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState("");

  if (!cartContext) return null;
  const { cart, clearCart } = cartContext;

  if (cart.length === 0) {
    return (
      <div className="payment-page">
        <div className="payment-card">
          <h1>CHECKOUT</h1>
          <p style={{ textAlign: "center", color: "#888", marginTop: "1rem" }}>
            Your cart is empty.
          </p>
          <button
            className="pay-btn"
            onClick={() => navigate("/")}
            style={{ marginTop: "1.5rem" }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const total = cart.reduce((acc, item) => acc + Number(item.price), 0);

  const publicKey = "pk_test_beea37116b54a73b90544f75711331e539e9262d";

  const validateEmail = (value) => {
    if (!value) return "Email is required to process payment.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Please enter a valid email address.";
    return "";
  };

  const componentProps = {
    email: email || "customer@shop-inn.com",
    amount: total * 100,
    currency: "NGN",
    metadata: {
      name: name || "SHOP-INN Customer",
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: name || "SHOP-INN Customer",
        },
      ],
    },
    publicKey,
    text: "Pay Now",
    onSuccess: (reference) => {
      const existingOrders = JSON.parse(
        localStorage.getItem("orders") || "[]"
      );
      const newOrder = {
        id: Date.now(),
        reference: reference.reference,
        items: cart,
        total,
        status: "Processing",
        date: new Date().toISOString(),
        customerEmail: email,
        customerName: name,
      };
      localStorage.setItem(
        "orders",
        JSON.stringify([...existingOrders, newOrder])
      );
      clearCart();
      navigate("/orders", {
        state: { success: true, reference: reference.reference },
      });
    },
    onClose: () => {
      alert("Payment cancelled. Your items are still in your cart.");
    },
  };

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h1>CHECKOUT</h1>

        <div className="payment-customer-fields">
          <div className="field-group">
            <label htmlFor="cust-name">Full Name</label>
            <input
              id="cust-name"
              type="text"
              placeholder="e.g. Chidi Okeke"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field-group">
            <label htmlFor="cust-email">
              Email <span className="required">*</span>
            </label>
            <input
              id="cust-email"
              type="email"
              placeholder="e.g. chidi@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              onBlur={() => setEmailError(validateEmail(email))}
            />
            {emailError && (
              <span className="field-error">{emailError}</span>
            )}
          </div>
        </div>

        <div className="payment-summary">
          {cart.map((item) => (
            <div key={item.id} className="payment-item">
              <p>{item.name}</p>
              <p>₦{Number(item.price).toLocaleString()}</p>
            </div>
          ))}
          <div className="payment-divider" />
          <div className="payment-total-row">
            <span>Total</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
        </div>

        {validateEmail(email) === "" ? (
          <PaystackButton className="pay-btn" {...componentProps} />
        ) : (
          <button
            className="pay-btn pay-btn-disabled"
            onClick={() => setEmailError(validateEmail(email))}
          >
            Pay Now
          </button>
        )}

        <p className="payment-secure-note">
          🔒 Secured by Paystack
        </p>
      </div>
    </div>
  );
};

export default Payment;