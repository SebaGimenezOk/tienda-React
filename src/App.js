
import "./App.scss";
import "./components/NavBar/NavBar.scss";
import Navegador from "./components/NavBar/NavBar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import{BrowserRouter, Routes, Route} from "react-router-dom"


function App() {

  return (
    <div>
      <Navegador />
      <ItemListContainer section ="PRODUCTOS EN OFERTA"/>
      <ItemListContainer section ="PRODUCTOS SIN STOCK"/>
    
    </div>
  );
}

export default App;