
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navegador from "./components/NavBar/NavBar.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import * as React from 'react';
import Home from "./components/pages/Home/Home";
import Contact from "./components/pages/Contact/Contact";
import Nosotros from "./components/pages/Nosotros/Nosotros";
import Products from "./components/pages/Products/Products";
import Category from "./components/pages/Category/Category";



function App() {

  return (
    <BrowserRouter>
      <Navegador />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Nosotros" element={<Nosotros/>}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Category" element={<Category/>} />
        <Route path="/:category: id" element={<Products/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;