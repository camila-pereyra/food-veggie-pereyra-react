import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useEffect, useState, useContext } from "react";
import cartt from "../../images/cartt.png";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    setCartLength(
      cart.reduce(
        (valorPasado, valorActual) => valorPasado + valorActual.quantity,
        0
      )
    );
  }, [cart]);
  return (
    <div className="cartWidget">
      <Link to={"/cart"}>
        <img src={cartt} alt="carrito" />
        <span className="cartCount">{cartLength}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
