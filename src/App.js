
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {

  return (
    <div>
      <NavBar />
      <div className="main-container">
        <ItemDetailContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;