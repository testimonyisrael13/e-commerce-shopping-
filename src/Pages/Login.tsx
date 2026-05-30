import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handlelogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("https://ecommerceproject-webapi.fly.dev/api/v1/Auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            console.log(data, "login response");

            if (!res.ok) {
                alert(data?.message || "Login failed");
                return;
            }

              if (data?.token) {
                    localStorage.setItem("token", data.token);

                    
                        localStorage.setItem("role", 'admin');
                        
                    } 

            alert("Login Successful");
            
            const userRole = data?.user?.userType?.toLowerCase() === "admin" ? "admin" : "customer";
                navigate(userRole === "admin" ? "/dashboard" : "/");
            
                
        } catch (err: any) {
            console.error("Login error:", err);
            alert(err?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-contain">
            <div className="auth-sidebar">
                <div className="auth-overlay">
                    <h1 className="auth-logo">SHOP-INN.</h1>
                    <p className="auth-tagline">
                        "The simplest way to find premium quality products in Lagos."
                    </p>
                </div>
            </div>
            <div className="login-container">
                <div className="login-card">
                    <h2>LOGIN</h2>
                    <form onSubmit={handlelogin}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                      <div className="password-field">
                        <input
                             type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setPassword(e.target.value)
                                }
                            />
                                <span
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </span>
                                </div>
                        <button type="submit" className="loginbtn" disabled={loading}>
                            {loading ? "Loading..." : "LOGIN"}
                        </button>
                    </form>
                    <p className="loginfooter">
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;