
import './Footer.scss';
import {Link}from 'react-router-dom'


function Footer() {
    return (
        <div className="footer" activeKey="/Home" fixed="to">
            <div>
                <h2 className='titulo-footer'>PonteCle Social Media</h2>
            </div>
            <div className='iconos-footer'>
                <a href='https://www.facebook.com/' target="_blank" rel='noreferrer' >  <button className="iconos-footer" >facebook</button></a>
                <a href='https://www.twitter.com/' target="_blank"rel='noreferrer'  >  <button className="iconos-footer" >twitter</button></a>
                <a href='https://www.instagram.com/' target="_blank"rel='noreferrer'  >  <button className="iconos-footer" >instagram</button></a>
                <a href='https://www.youtube.com/' target="_blank" rel='noreferrer' > <button className="iconos-footer" >youtube</button></a>
                <a href='https://www.telegram.com/' target="_blank"rel='noreferrer'  > <button className="iconos-footer" >telegram</button></a>
            </div>
            <div className='iconos-footer'>
                <Link to='/'><img src="/assets/favicon-blanco.png" alt="logo" /></Link>
            </div>
        </div>
    );
}

export default Footer;