export default function NavItem({ text, href }) {
    return (
        //Destructuring 
        <li>
            <a href={href}>{text}</a>
        </li>
    )
}