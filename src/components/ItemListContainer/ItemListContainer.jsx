import './itemlist.css'; 
import Item from './Item';
import obtenerProductos, { obtenerCategoria } from '../../services/mockService';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

export default function ItemListContainer(props) {
  const [arrayProductos, setArrayProductos] = useState([])
  let {categoryid} = useParams();

  /* console.log("%cRenderizando itemlist!", "background-color: yellow"); */
 
  useEffect(()=>{
    if(!categoryid){
      obtenerProductos().then((respuesta)=>{
        setArrayProductos(respuesta);
      }).catch(error=>alert(error))
    }else{
      obtenerCategoria(categoryid)
      .then((respuesta)=>{
        setArrayProductos(respuesta)
      })
    }
    
  },[categoryid]);

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