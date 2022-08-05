

import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="container">
      <ul>
        <li><Link to="/category/Duros">Duros</Link></li>
        <li><Link to="/category/Blandos">Blandos</Link></li>
        <li><Link to="/category/Estacionados">estacionados</Link></li>
      </ul>
    </div>
  )
}
export default Home;