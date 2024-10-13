import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Signup from "./pages/Signup"
import Products from "./pages/Products"
import Login from "./pages/Login"
import { UserProvider } from "./UserContext/UserContext"
import ShoppingCart from "./pages/ShoppingCart"
import ProductDetail from "./pages/ProductDetail"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
    <Router>
      <UserProvider>
        <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
      </UserProvider>
    </Router>
    
    </>
  )
}

export default App
