
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./Context/CartContext";
import Home from "./pages/Home"
import Nosotros from "./pages/Nosotros";
import Cart from "./pages/Cart";
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Contact from "./pages/Contact";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Detail from "./pages/Detail"
import Products from "./pages/Products"



function App() {

  return (
    <CartProvider>
    <BrowserRouter>
    <div className="fondo"> 
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:categoryId' element={<Products />} />
          <Route path='/Products/:productoId' element={<Detail />} />
          <Route path='/Nosotros' element={<Nosotros />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Cart' element={<Cart />}/> 
          <Route path='*' element={<h1 className="titulos-detail">Error 404 - Página no encontrada.</h1>} />
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;