import "../styles/navbar.css"
import CartWidget from "./CartWidget"

const Navbar = () => {
    return(
        <nav className="container-nav">
            <img className="nav-img" src="../logo2.png" alt="Logo de la marca"/>
            <div className="nav-a">
                <a href="">Ofertas</a>
                <a href="">Yerbas</a>
                <a href="">Galletitas</a>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default Navbar