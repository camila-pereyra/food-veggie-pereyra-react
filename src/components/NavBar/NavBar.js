import "./NavBar.css";
import logo from "../../images/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar-container">
      <Link className="navBar-logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ul className="navBar-options">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navBar-optionsEnlaceActivo" : "navBar-optionsEnlace"
            }
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/milanesas"
            className={({ isActive }) =>
              isActive ? "navBar-optionsEnlaceActivo" : "navBar-optionsEnlace"
            }
          >
            Milanesas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/tartas"
            className={({ isActive }) =>
              isActive ? "navBar-optionsEnlaceActivo" : "navBar-optionsEnlace"
            }
          >
            Tartas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/hamburguesas"
            className={({ isActive }) =>
              isActive ? "navBar-optionsEnlaceActivo" : "navBar-optionsEnlace"
            }
          >
            Hamburgesas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/otros"
            className={({ isActive }) =>
              isActive ? "navBar-optionsEnlaceActivo" : "navBar-optionsEnlace"
            }
          >
            Otros
          </NavLink>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
