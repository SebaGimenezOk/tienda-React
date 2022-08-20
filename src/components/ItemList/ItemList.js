import Item from "../Item/Item"


const ItemList = ({infoproductos}) => {
    return (
        <>
            {infoproductos.map((producto) => {
                return <Item key={producto.id} data={producto} />
            })}
        </>
    )
}
export default ItemList