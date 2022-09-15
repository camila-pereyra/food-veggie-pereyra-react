import { Link } from "react-router-dom";
import cart from "../../images/cart.png";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <Link to={"/carrito"} className="cartWidget">
      <img src={cart} alt="carrito" />
    </Link>
  );
};

export default CartWidget;
