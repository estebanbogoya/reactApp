import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerDetalle } from "../../services/mockService";
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer() {
    const [producto, setProducto] = useState([])

    let params = useParams();
    console.log(params);

    useEffect(() => {
        obtenerDetalle(params.itemid).then((respuesta) => {
            setProducto(respuesta);
        }).catch(error => alert(error))
    }, [])
    return (
        <ItemDetail
            title={producto.title}
            model={producto.model}
            year={producto.year}
            image={producto.image}
            price={producto.price}
        />
    )
}   