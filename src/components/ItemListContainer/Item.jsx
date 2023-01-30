import { Link } from 'react-router-dom'
import './item.css'

export default function Item(props){
    const {title, model, year, image, price, id} = props.item
    return(
        <div className="cardProductos">
            <h2>{title}</h2>
            <h3>{model}</h3>
            <h4>{year}</h4>
            <img className="img"src={image} alt="producto en venta" />
            <p>${price} usd</p>
            <Link to = {`/detail/${id}`}>
                <button className='btn btn-success'>Ver Detalle</button>
            </Link>
        </div>
    )
}