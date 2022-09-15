import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return(
        <nav className="NavBar">
            <ul>
                <li><NavLink to="/">Forside</NavLink></li>
                <li><NavLink to="/products">Produkter</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    )
}