
import ItemDetail from "../ItemDetail/ItemDetail"
const ItemList = ({dataProducts}) => {
    return(
        <>
            {dataProducts.map( (product) => {    
                return <ItemDetail key={product.id} data={product}/>
            })}
        </>
    )
}

export default ItemList; 