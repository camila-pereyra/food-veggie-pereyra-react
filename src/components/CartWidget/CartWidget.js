import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useEffect, useState, useContext } from "react";
import cartt from "../../images/cartt.png";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [cartLength, setCartLength] = useState(0);
  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);
  return (
    <>
      {" "}
      <Link to={"/cart"} className="cartWidget">
        <img src={cartt} alt="carrito" />
        <span className="cartCount">{cartLength}</span>
      </Link>
    </>
  );
};

export default CartWidget;
