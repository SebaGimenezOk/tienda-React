import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="nav-estilo">
                <Link className='navButton' to='/'><img src="/assets/favicon-blanco.png" alt="logo" /></Link>
                <Link className='navButton' to='/'>Home</Link>
                <Link className='navButton' to='/category/blandos'>blandos</Link>
                <Link className='navButton' to='/category/duros'>duros</Link>
                <Link className='navButton' to='/category/estacionados'>estacionados</Link>
                <Link className='navButton' to='/Nosotros'>Nosotros</Link>
                <Link className='navButton' to='/Contact'>Contact</Link>
                <Link className='navButton' to='/Cart'><CartWidget /></Link>
        </div>
    )
}
export default NavBar;
