
import './NavBar.scss'
import CartWidget from '../Button/Button';
import {Link} from "react-router-dom";




const NavBar = () => {
    return (
        <div className='navbar-primary'>
            <Link to="/Home"><img alt="logo pontecle" src="/assets/favicon-blanco.png" className='caja-logo' /></Link>
            <Link to="/Home" className='iconos-footer'>Home</Link>
            <Link to="/Products" className='iconos-footer'>Products</Link>
            <Link to="/Nosotros" className='iconos-footer'>Nosotros</Link>
            <Link to="/Contact" className='iconos-footer'>Contact</Link>
            <div>
                <CartWidget />
            </div>
        </div>
    )
}
export default NavBar;