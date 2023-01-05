import CartWidget from './CartWidget'
import './navbar.css'
import NavItem from './NavItem'

export default function NavBar(props) {
    return (
        <div className='barra'>
            <nav>
                <ul className='contenido'>
                    <li>
                        <a href="/">
                            <img className='logo' src="/img/logo.png" alt="logo" />
                        </a>
                    </li>
                    <NavItem href="/camisetas" text="Autos" />
                    <NavItem href="/zapatillas" text="Motos" />
                    <NavItem href="/otros" text="Accesorios" />
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </nav>
        </div>
    )
}