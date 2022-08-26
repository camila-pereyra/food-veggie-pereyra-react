import './NavBar.css'

const navBar = () =>{
    return (
        <div className="navBar-container">
            <h1 className="navBar-tittle">Food Veggie</h1>
            <ul className="navBar-options">
                <li><a href="">Inicio</a> </li>
                <li><a href="">Haz tu pedido</a></li>
                <li><a href="">Sobre nosotros</a></li>
                <li><a href="">Contacto</a></li>
            </ul>
        </div>
    )
}

export default navBar;