// import { AppRouter } from "./Routes"
import AppRouter from './AppRouter'
import './App.css'
import CartImg from './assets/cart.png'
import Navbar from "./component/Navbar"
import Footer from './component/Footer'
import { CartProvider } from './Pages/CartContext'

const App = () => {
  return (
    <CartProvider>
    <><><div className="home-header">
      <div>
        <img src={CartImg} alt="cart" className="cartimage" />
        <h1>SHOP-INN</h1>
      </div>
    </div>
      <div>

      </div>
    
      <Navbar />
      <AppRouter /></>
      <Footer /></>
      </CartProvider>
  )
}
export default App
