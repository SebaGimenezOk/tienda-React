
import './NavBar.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
    return (
        <div className='navbar-primary'>
            <img className='caja-logo'  src="/assets/favicon-blanco.png" alt="logo pontecle"/>
            <ul>
                <li><button> Inicio</button> </li>
                <li><button> Producto</button> </li>
                <li><button> Sobre Nos</button> </li>
                <li><button> Contacto</button> </li>
            </ul>
            <div>
           <ShoppingCartIcon />
            </div>
        </div>
    )
}
export default NavBar;