
import './NavBar.scss'
import CartWidget from '../Button/Button';
import { Link } from "react-router-dom";




const NavBar = () => {
    return (
        <div className='navbar-primary'>
            <nav>
                <Link to="/Home"><img alt="logo pontecle" src="/assets/favicon-blanco.png" className='caja-logo' /></Link>
                <ul className='lista-categoria'>
                    <li><Link to="/Home" className='iconos-footer'>Home</Link></li>
                    <li><Link to="/Category/:categoryName" className='iconos-footer'>Products</Link></li>
                    <li><Link to="/Nosotros" className='iconos-footer'>Nosotros</Link></li>
                    <li><Link to="/Contact" className='iconos-footer'>Contact</Link></li>
                </ul>
                <div>
                    <CartWidget />
                </div>



            </nav>

        </div>
    )
}
export default NavBar;