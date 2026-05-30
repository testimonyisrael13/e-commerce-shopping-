import { Routes,Route } from "react-router-dom";
import Home from './Pages/Home'
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProductPage from "./Pages/ProductPage";
import Cart from "./Pages/Cart";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Payment from "./Pages/Payment";
const AppRouter =() => {
    return (
        <Routes>
            <Route path ='/' element ={<Home/>} />
            <Route path ='/login' element ={<Login/>}/>
            < Route path ='/signup' element ={<Signup/>}/>
            < Route path ='/product' element ={<ProductPage/>}/>
            < Route path ='/cart' element ={<Cart/>}/>
            < Route path ='/dashboard' element ={<Dashboard/>}/>
            < Route path ='/Orders' element ={<Orders/>}/>
            < Route path ='/payment' element ={<Payment/>}/>  
            
        </Routes>
    )
}
export default AppRouter