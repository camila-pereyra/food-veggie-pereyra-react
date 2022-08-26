import './NavBar.css'
import logo from '../../images/logo.png'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () =>{
    return (
        <div className="navBar-container">
            <a href="" className="navBar-logo"><img src={logo}/></a>
            <ul className="navBar-options">
                <li><a href="">Inicio</a> </li>
                <li><a href="">Haz tu pedido</a></li>
                <li><a href="">Sobre nosotros</a></li>
                <li><a href="">Contacto</a></li>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default NavBar;