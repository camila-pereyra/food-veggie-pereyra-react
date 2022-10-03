import "./NavBar.css";
import logo from "../../images/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link, useLocation } from "react-router-dom";
import BurguerBotton from "../BurguerBotton/BurguerBotton";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
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
        <Link className="navContainer-link" to="/">
          Inicio
        </Link>
        <Link className="navContainer-link" to="/category/milanesas">
          Milanesas
        </Link>
        <Link className="navContainer-link" to="/category/tartas">
          Tartas
        </Link>
        <Link className="navContainer-link" to="/category/hamburguesas">
          Hamburgesas
        </Link>
        <Link className="navContainer-link" to="/category/otros">
          Otros
        </Link>
      </div>
      <div className="navContainer-cart">
        <CartWidget />
      </div>
      <div className="navContainer-hamburMenu">
        <BurguerBotton clicked={clicked} handleClick={handleClick} />
      </div>
    </nav>
  );
};

export default NavBar;
