import "../styles/navbar.css"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="container-nav">
            <NavLink to='/'>
                <img className="nav-img" src="../logo2.png" alt="Logo de la marca" />
            </NavLink>
            <div className="nav-a">
                <NavLink to="/category/yerbas">Yerbas</NavLink>
                <NavLink to="/category/galletitas">Galletitas</NavLink>
                <NavLink to="/category/accesorios">Accesorios</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default Navbar