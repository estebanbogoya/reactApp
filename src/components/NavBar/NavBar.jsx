import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import './navbar.css'
import NavItem from './NavItem'

export default function NavBar(props) {
    return (
        <div className='barra'>
            <nav>
                <ul className='contenido'>
                    <Link to="/"><img className='logo' src="/img/logo.png" alt="logo" /></Link>
                    <Link to="/category/New">Modernos</Link>
                    <Link to="/category/Old">Antiguos</Link>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </nav>
        </div>
    )
}