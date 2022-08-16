
import "./ItemDetail.scss"
import Item from "../Item/Item"


const ItemDetail = ({dataFullProd}) => {

    return (
        <>
        {dataFullProd.map((product) => {
            return (
                <>
                    <Item key={product.id} data={product} />
                </>
            )
        })}
    </>
    )
}
export default ItemDetail;