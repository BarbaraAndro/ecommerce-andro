import "../styles/navbar.css"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="container-nav">
            <div>
            <NavLink to='/'><img className="nav-img" src="../logo2.png" alt="Logo de la marca" /></NavLink>
            </div>
            <div className="nav-link">
                <NavLink className='nav-a' to="/">Home</NavLink>
                <NavLink className='nav-a' to="/category/yerbas">Yerbas</NavLink>
                <NavLink className='nav-a' to="/category/galletitas">Galletitas</NavLink>
                <NavLink className='nav-a' to="/category/accesorios">Accesorios</NavLink>
            </div>
            <NavLink to='/cart'>
                <CartWidget />
            </NavLink>
        </nav>
    )
}
export default Navbar