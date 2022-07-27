
import './ItemListContainer.scss'
import ItemProduct from "../ItemProduct/ItemProduct"

const ItemListContainer = ({ section }) => {
    return (
        <div className="item-container">
            <h1 className="titles">{section}</h1>
            <ItemProduct title='REGGIANO' price={1500} img={'reggiano.png'} />
            <ItemProduct title='HOLANDA' price={1700} img={'holanda.png'} />
            <ItemProduct title='SARDO' price={1300} img={'sardo.png'} />
        </div>
    )
}
export default ItemListContainer;