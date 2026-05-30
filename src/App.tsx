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
    <><>
    
      <Navbar />
      <AppRouter /></>
      <Footer /></>
      </CartProvider>
  )
}
export default App
