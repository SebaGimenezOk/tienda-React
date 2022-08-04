import Nav from 'react-bootstrap/Nav';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Footer.scss';



function Footer() {
    return (
        <Nav className="footer"  activeKey="/Home" fixed="bottom">
            <ButtonGroup vertical>
                <DropdownButton as={ButtonGroup} title="PonteClé Social Media" id="bg-vertical-dropdown-1">
                    <Dropdown.Item className='iconos-footer' eventKey="1">Facebook</Dropdown.Item>
                    <Dropdown.Item className='iconos-footer' eventKey="2">Twitter</Dropdown.Item>
                    <Dropdown.Item className='iconos-footer' eventKey="3">Instagram</Dropdown.Item>
                    <Dropdown.Item className='iconos-footer' eventKey="4">Youtube</Dropdown.Item>
                    <Dropdown.Item className='iconos-footer' eventKey="5">Telegram</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
        </Nav>
    );
}

export default Footer;