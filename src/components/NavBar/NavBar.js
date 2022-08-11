import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="nav-estilo">
            <Link to='/'><button><img src="/assets/favicon-blanco.png" alt="logo" /></button></Link>
            <Link to='/'><button>Home</button></Link>
            <Link to='/Products'><button>products</button></Link>
            <Link to='/Nosotros'><button>Nosotros</button></Link>
            <Link to='/Contact'><button>Contact</button></Link>
            <button> <CartWidget /></button>
        </div>
    )
}
export default NavBar;
