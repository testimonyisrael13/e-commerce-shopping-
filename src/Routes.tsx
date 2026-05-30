import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Payment from "./Pages/Payment";
export const AppRouter = ()=> {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/payment" element={<Payment />} />
        </Routes>
        </BrowserRouter>
    )
}