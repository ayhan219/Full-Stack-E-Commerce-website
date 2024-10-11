import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Signup from "./pages/Signup"
import Products from "./pages/Products"
import Login from "./pages/Login"
import { UserProvider } from "./UserContext/UserContext"
import ShoppingCart from "./pages/ShoppingCart"

function App() {


  return (
    <>
    <Router>
      <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
      </UserProvider>
    </Router>
    
    </>
  )
}

export default App
