import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div className="nav-estilo">
            <img src="/assets/favicon-blanco.png" alt="logo" />
            <button>inicio </button>
            <button>Productos </button>
            <button>About us </button>
            <button>Contacto </button>
            <button> <CartWidget /></button>
        </div>
    )
}
export default NavBar;
