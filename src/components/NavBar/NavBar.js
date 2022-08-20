import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="nav-estilo">
            <NavLink to='/'><button><img src="/assets/favicon-blanco.png" alt="logo" /></button></NavLink>
            <NavLink to='/'><button>Home</button></NavLink>
            <NavLink to='/Products'><button>products</button></NavLink>
            <NavLink to='/Nosotros'><button>Nosotros</button></NavLink>
            <NavLink to='/Contact'><button>Contact</button></NavLink>
            <button> <CartWidget /></button>
        </div>
    )
}
export default NavBar;
