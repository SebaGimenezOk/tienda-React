

import "../App.scss"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Contact from "./Contact";
import Nosotros from "./Nosotros";



const Home = () => {
  return (
    <div>
      <ItemListContainer />
       <Nosotros />
      <Contact /> 
       </div>
     
    
  )
}
export default Home;