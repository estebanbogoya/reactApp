import CartWidget from './CartWidget'
import './navbar.css'

export default function NavBar(props) {
    return (
        <nav className = "navbar"> 
            <ul className='navContent'>
                <li>
                    <a href="/">
                        <h3>Logo</h3>
                    </a>
                </li>
                <li>
                    <a href="/">
                        Inicio 
                    </a>
                </li>
                <li>
                    <a href="/">
                        Camisetas 
                    </a>
                </li>
                <li>
                    <a href="/">
                        Zapatillas
                    </a>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}