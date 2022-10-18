import "./NavBar.css";
import logo from "../../images/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink, useLocation } from "react-router-dom";
import BurguerBotton from "../BurguerBotton/BurguerBotton";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();
  const { cart } = useContext(CartContext);
  const handleClick = () => {
    //cuando esta true lo pasa a false y viceversa
    setClicked(!clicked);
  };
  const screenSizes = (e) => {
    if (e.target.innerWidth > 768) {
      setClicked(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", screenSizes);
  }, []);
  useEffect(() => {
    if (clicked) {
      setClicked(false);
    }
  }, [location]);

  return (
    <nav className="navContainer">
      <div className="navContainer-logo">
        <Link className="navBar-logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className={`navContainer-links ${clicked ? "active" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/category/milanesas"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Milanesas
        </NavLink>
        <NavLink
          to="/category/tartas"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Tartas
        </NavLink>
        <NavLink
          to="/category/hamburguesas"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Hamburgesas
        </NavLink>
        <NavLink
          to="/category/otros"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Otros
        </NavLink>
      </div>
      {cart.length > 0 && (
        <div className="navContainer-cart">
          <CartWidget />
        </div>
      )}

      <div className="navContainer-hamburMenu">
        <BurguerBotton clicked={clicked} handleClick={handleClick} />
      </div>
    </nav>
  );
};

export default NavBar;

