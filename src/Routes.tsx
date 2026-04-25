import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Dashboard from "./Pages/Dashboard";
export const AppRouter = ()=> {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Dashboard" element={<Dashboard />} />


        </Routes>
        </BrowserRouter>
    )
}