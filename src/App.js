
import "./App.scss";
import "./components/NavBar/NavBar.scss";
import Navegador from "./components/NavBar/NavBar.js"
// import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import{BrowserRouter, Routes, Route} from "react-router-dom"


function App() {

  return (
    <div>
      <Navegador />
      {/* <ItemListContainer section ="PRODUCTOS EN OFERTA"/>
      <ItemListContainer section ="PRODUCTOS SIN STOCK"/> */}
      <ItemDetailContainer item={2}/>
    </div>
  );
}

export default App;