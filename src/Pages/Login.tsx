import { useState } from "react";
import { Link } from "react-router-dom";
import './login.css';
const Login = () => {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    const handlelogin = (e: React.FormEvent) =>{
        if (email && password) {
            alert('Login Successful')
    } else {
        alert('Invalid Credentials' )
        }
    }
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
        <div className="login-container" >
            <div className="login-card">
                <h2>
                    LOGIN
                </h2>
                 <form onSubmit={handlelogin}>
                    <input
                    type='email'
                    placeholder='Email'
                    value= {email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)}
                    />
                    <input
                    type='password'
                    placeholder='Password'
                    value= {password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setPassword(e.target.value)}
                     />
                    <button type="submit" className="loginbtn">LOGIN</button>
                </form>
                    <p className="loginfooter">
                         Don't have an account? <Link to= '/signup'>Sign up </Link>
                   </p>
            </div>
        </div>
        </div>
    )
}
export default Login