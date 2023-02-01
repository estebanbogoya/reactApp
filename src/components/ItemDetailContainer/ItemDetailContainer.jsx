import React, { useEffect, useState, useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import { useParams } from "react-router-dom";
import { obtenerDetalle } from "../../services/mockService";
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer() {
    const [producto, setProducto] = useState([])
    let { itemid } = useParams();

    const {addToCart, removeItem} = useContext(cartContext)

    function handleOnAdd(cantidad) {
        const productoCantidad = {...producto, cantidad: cantidad}
        addToCart(productoCantidad)
    }

    function handleOnDelete() {
        removeItem(producto.id)
    }

    useEffect(() => {
        obtenerDetalle(itemid).then((respuesta) => {
            setProducto(respuesta);
        }).catch(error => alert(error))
    }, [])
    return (
        <ItemDetail
            onAddToCart={handleOnAdd}
            onDelete={handleOnDelete}
            title={producto.title}
            model={producto.model}
            year={producto.year}
            image={producto.image}
            price={producto.price}
        />
    )
}   