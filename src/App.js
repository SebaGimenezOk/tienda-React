
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Nosotros from "./pages/Nosotros";
import Detail from "./pages/Detail";

function App() {

  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Products/:id" element={<Detail/>} />
          <Route path="/Nosotros" element={<Nosotros/>} />
          <Route path="*"element={<h1>Error 404 - Página no encontrada.</h1>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;