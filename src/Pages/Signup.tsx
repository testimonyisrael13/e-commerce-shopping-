import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const request = await fetch(
        "https://ecommerceproject-webapi.fly.dev/api/v1/Auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstname,
            lastName: lastname,
            email,
            password,
            confirmPassword,
          }),
        },
      );

      const text = await request.text();
      const response = text ? JSON.parse(text) : {};
      console.log(response, "response");

      if (!request.ok) {
        alert(response?.message || response?.title || "Signup failed");
        return;
      }

      alert("Account created successfully!");
      navigate("/login");
    } catch (err: any) {
      console.error("Signup error:", err);
      alert(err?.message || "Signup failed");
    } finally {
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
            <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            <div className="password-field">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <span
                className="toggle-password"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </span>
            </div>
            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? "loading.." : "Sign up"}
            </button>
          </form>
          <p className="footer-txt">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;