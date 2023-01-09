import ItemCount from "../ItemCount/ItemCount";
import './itemDetail.css'

export default function({title, model, year, image, price}){
    return(
        <div className="cardProductos containerDetail">
            <h2>{title}</h2>
            <h3>{model}</h3>
            <h4>{year}</h4>
            <img className="imgDetail"src={image} alt="producto en venta" />
            <p className="price">${price} usd</p>
            <ItemCount/>
        </div>
    )
}