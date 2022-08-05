
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navegador from "./components/NavBar/NavBar.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import * as React from 'react';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Nosotros from "./pages/Nosotros";
import Products from "./pages/Products";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {

  return (
    <BrowserRouter>
      <Navegador />
      <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/Nosotros" element={<Nosotros/>}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Category/:categoryName" element={<Products/>} />
        <Route path="/Products/:id" element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;