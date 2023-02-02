import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import './itemDetail.css'

export default function({title, model, year, image, price, onAddToCart, isInCart}){
    const[countInCart, setCountInCart] = useState(0);
    const context = useContext(cartContext)
    
    
    return(
        <div className="cardProductos containerDetail">
            <h2>{title}</h2>
            <h3>{model}</h3>
            <h4>{year}</h4>
            <img className="imgDetail"src={image} alt="producto en venta" />
            <p className="price">${price} usd</p>

           {
           isInCart ? 
           <Link to="/cart">
           <Button className="btn btn-success">Ir al Carrito</Button>
           </Link>
           :
           <ItemCount onAddToCart={onAddToCart}/>}
        </div>
    )
}