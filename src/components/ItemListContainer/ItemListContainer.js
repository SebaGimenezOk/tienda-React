
import './ItemListContainer.scss'
import ItemProduct from "../ItemProduct/ItemProduct"

const ItemListContainer = ({ section }) => {
    const produc01 = {
        title: 'reggiano',
        price: 1999,
        img: 'reggiano.png',
        stock: 18
    }
    const produc02 = {
        title: 'holandex',
        price: 999,
        img: 'holanda.png',
        stock: 20
    }
    const handleSubmit = () => { console.log("envia info"); }

    return (
        <div className="item-container">
            <h1 className="titles">{section}</h1>
            <ItemProduct data={produc02} action={handleSubmit} />

            <ItemProduct data={produc01} action={handleSubmit} />

        </div>
    )
}
export default ItemListContainer;