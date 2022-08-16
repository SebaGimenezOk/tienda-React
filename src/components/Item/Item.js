import './Item.scss'


const Item = ({ data }) => {
    const { title, stock, img, price, description } = data

    return (
        <div className="item-product">
            <img className='caja-foto' src={`/assets/${img}`} alt="img prod" />
            <div className="titulosybotones">
            <p className='titulosybotones' >{title} </p>
            <p className='titulosybotones2'>$: {price}</p>
            <p className='titulosybotones'>Stock: {stock} </p>
            <p className='descript' >description:   {description} </p>
            <button>comprar </button>
            </div>
        </div>
    )
}
export default Item