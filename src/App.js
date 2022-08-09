
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";



function App() {

  return (
    <div className="container">
      <NavBar />
      <div className="main-container">
        <ItemListContainer  section="promociones" />
      </div>
      <Footer />
    </div>

  );
}

export default App;