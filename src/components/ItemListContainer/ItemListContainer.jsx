import './itemlist.css';
import Item from './Item';
import { obtenerCategoria } from '../../services/firebase';
import { obtenerProductos } from "../../services/firebase";
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';


export default function ItemListContainer(props) {
  const [arrayProductos, setArrayProductos] = useState([])
  const [isLoading, setIsLoadinig] = useState(true)
  let { categoryid } = useParams();

  useEffect(() => {
    if (!categoryid) {
      obtenerProductos().then((respuesta) => {
        setArrayProductos(respuesta);
      }).catch(error => alert(error))
        .finally(
          () => setIsLoadinig(false)
        )
    } else {
      obtenerCategoria(categoryid)
        .then((respuesta) => {
          setArrayProductos(respuesta)
        }).catch(error => alert(error))
        .finally(
          () => setIsLoadinig(false)
        )
    }

  }, [categoryid]);

  return (
    <>
      {
        isLoading ?
          <Loader />
          :
          <div className='itemList'>

            {
              arrayProductos.map((elemento => {
                return <Item key={elemento.id} item={elemento} />
              }))
            }
          </div>
      }

    </>
  )
}