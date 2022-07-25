import Button from 'react-bootstrap/Button';
import './Button.scss';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function CartWidget() {
    return (
      <>
    <Button className='carrito'>
         <ShoppingCartOutlinedIcon s/>
         </Button> 
      </>
  );
}

export default CartWidget;