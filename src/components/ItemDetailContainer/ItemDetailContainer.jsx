import React, { useEffect, useState, useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import { useParams } from "react-router-dom";
import { obtenerDetalle } from "../../services/mockService";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";


export default function ItemDetailContainer() {
    const [producto, setProducto] = useState([])
    const [isLoading, setIsLoadinig] = useState(true)
    const [isInCart, setIsInCart] = useState()
    let { itemid } = useParams();

    const { addToCart, removeItem } = useContext(cartContext)

    function handleOnAdd(cantidad) {
        setIsInCart(cantidad)
        const productoCantidad = { ...producto, cantidad: cantidad }
        addToCart(productoCantidad)
    }

    function handleOnDelete() {
        removeItem(producto.id)
    }

    useEffect(() => {
        obtenerDetalle(itemid).then((respuesta) => {
            setProducto(respuesta);
        }).catch(error => alert(error))
            .finally(
                () => setIsLoadinig(false))
    }, [])

    if (isLoading) {
        return <Loader />
    } else {
        return (
            <ItemDetail
                isInCart={isInCart}
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
}