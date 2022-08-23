import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.scss"
import { useCartContext } from '../../Context/CartContext';

const CartWidget = () => {
const {productosTotal}=useCartContext()

    return (
        <div>
        <button><ShoppingCartIcon sx={{ fontSize: 35 }}/></button>
        <span>{productosTotal() || " "} </span>
    </div>
)
}
export default CartWidget;