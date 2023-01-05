import './itemlist.css'; 
import Item from './Item';
import obtenerProductos from '../../services/mockService';
import React, {useState, useEffect} from 'react'

export default function ItemListContainer(props) {
  const [arrayProductos, setArrayProductos] = useState([])

  console.log("%cRenderizando ItemListContainer", "background-color: yellow");
 
  useEffect(()=>{
    obtenerProductos().then((respuesta)=>{
      setArrayProductos(respuesta);
    }).catch(error=>alert(error))
  },[]);

    return (
        <div className='itemList'>
            {
                arrayProductos.map((elemento =>{
                    return <Item key= {elemento.id} item = {elemento}/>
                }))
            }
        </div>
    )
}