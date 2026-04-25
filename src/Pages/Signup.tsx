import { useState } from "react";
//  import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [loading, setLoading] = useState(false)
 
const handleSubmit= async (e: any) => {
e.preventDefault()
setLoading(true)
    try{

    let request = await fetch(
       "https://sbscstore.fly.dev/api/authentication",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
        }),
      },
    );
    const response = await request.json();
    console.log(response, "response");
       console.log("Signup success:", request.json());
      alert("Account created successfully!");
      setLoading(false)
  } catch (err: any) {
      console.error("Signup error:", err.response?.data || err.message);
      alert(err.response?.data?.message || err?.message || err?.response?.message || "Signup failed");
      setLoading(false)
    }
    finally {
      setLoading(false);
    }
  };
  return (
  <div className="auth-container">
    <div className="auth-sidebar">
      <div className="auth-overlay">
        <h1 className="auth-logo">SHOP-INN.</h1>
        <p className="auth-tagline">
          "The simplest way to find premium quality products in Lagos."
        </p>
      </div>
    </div>
    <div className="form-section">
      <div className="form-box">
        <h2>Create Account</h2>
        <h4>Join today to enjoy premium SHOP-INN experience</h4>

        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            placeholder="Firstname"
            value={firstname}
            onChange={(e) => setfirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Lastname"
            value={lastname}
            onChange={(e) => setlastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button  type="submit" className="auth-btn" disabled={loading}>{loading ? 'loading..':'Sign up'}</button>
          
        </form>

        <p className="footer-txt">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  </div>
  
);
}
export default Signup;