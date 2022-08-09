
import './Footer.scss';



function Footer() {
    return (
        <div className="footer" activeKey="/Home" fixed="to">
            <div>
                <h2 className='titulo-footer'>PonteClé Social Media</h2>
            </div>
            <div className='iconos-footer'>
                <button className="iconos-footer" >facebook</button>
                <button className="iconos-footer" >twitter</button>
                <button className="iconos-footer" >instagram</button>
                <button className="iconos-footer" >youtube</button>
                <button className="iconos-footer" >telegram</button>
            </div>
            <div className='iconos-footer'>
                <img src="/assets/favicon-blanco.png" alt="logo" />
            </div>
        </div>
    );
}

export default Footer;