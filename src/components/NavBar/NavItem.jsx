import { Link } from "react-router-dom";

export default function NavItem({ text, href }) {
    return (
        //Destructuring 
        <li>
            <Link to={href}>{text}</Link>
        </li>
    )
}