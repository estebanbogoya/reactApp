import Button from "../Button/Button";
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import './navbar.css'
import NavItem from './NavItem'

export default function NavBar(props) {

    function handleSubmit(evt) {
        console.log(evt);
        evt.preventDefault();
        let user = evt.target.user.value
        props.onLogin(user)
    }

    return (
        <div className='barra'>
            <nav>
                <ul className='contenido'>
                    <Link to="/"><img className='logo' src="/img/logo.png" alt="logo" /></Link>
                    <Link to="/">Todos</Link>
                    <Link to="/category/New">Modernos</Link>
                    <Link to="/category/Old">Antiguos</Link>
                    <Link to="/">
                        <CartWidget />
                    </Link>
                    <form onSubmit={handleSubmit}>
                        <input name="user" type="text" />
                    </form>
                    <Button onClick={props.onLogOut} className="btn btn-success">Log out</Button>
                </ul>
            </nav>
        </div>
    )
}