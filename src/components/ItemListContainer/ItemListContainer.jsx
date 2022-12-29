import './itemlist.css';
import Button from '../Button/Button';
import ItemCount from '../ItemCount/ItemCount';
import BotonPrueba from './BotonPrueba';

export default function ItemListContainer(props) {
    return (
        <div className='itemList'>
            <h1 className='title'>{props.texto}</h1>
            <br></br>
            <Button/>
            <br></br>
            <ItemCount/>
            <br />
            <BotonPrueba/>
        </div>
    )
}