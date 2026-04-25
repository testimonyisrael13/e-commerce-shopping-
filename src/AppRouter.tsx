import { Routes,Route } from "react-router-dom";
import Home from './Pages/Home'
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProductPage from "./Pages/ProductPage";
import Cart from "./Pages/Cart";
const AppRouter =() => {
    return (
        <Routes>
            <Route path ='/' element ={<Home/>} />
            <Route path ='/login' element ={<Login/>}/>
            < Route path ='/signup' element ={<Signup/>}/>
            < Route path ='/product' element ={<ProductPage/>}/>
            < Route path ='/cart' element ={<Cart/>}/>
            
        </Routes>
    )
}
export default AppRouter