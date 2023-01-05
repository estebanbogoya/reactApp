import ItemCount from '../ItemCount/ItemCount'
import './card.css'

export default function Card(props){
    const {title, model, year, image, price} = props.item
    console.log(props.item);
    return(
        <div className="cardProductos">
            <h2>{title}</h2>
            <h3>{model}</h3>
            <h4>{year}</h4>
            <img className="img"src={image} alt="producto en venta" />
            <p>${price}</p>
            <ItemCount/>
        </div>
    )
}