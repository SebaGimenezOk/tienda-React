
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./Context/CartContext";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Nosotros from "./pages/Nosotros";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";


function App() {

  return (
    <CartProvider>
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:productoId" element={<Detail />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Cart" element={<Cart />}/> 
          <Route path="*" element={<h1 className="titulos-detail">Error 404 - Página no encontrada.</h1>} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;