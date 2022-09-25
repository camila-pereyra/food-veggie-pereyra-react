import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const calculateTotal = () => {
    let subtotal = 0;
    cart.forEach((element) => {
      subtotal = subtotal + element.price * element.quantity;
    });
    setTotal(subtotal);
  };

  return cart.length !== 0 ? (
    <div className="cartContainer">
      <h1>Carrito</h1>
      <ul className="cartRow">
        <li className="cartColumnImage">Imagen</li>
        <li className="cartColumnTittle">Titulo</li>
        <li className="cartColumnDescription">Descripcion</li>
        <li className="cartColumnPrice">Precio</li>
        <li className="cartColumnQuantity">Cantidad</li>
        <li className="cartColumnTotal">Total</li>
        <li className="cartColumnDelete">Eliminar</li>
      </ul>
      {cart.map((item) => (
        <div key={item.id} className="cartRow">
          <div className="cartColumnImage">
            <img src={item.image} alt={item.tiitle} />
          </div>
          <p className="cartColumnTittle">{item.tittle} </p>
          <p className="cartColumnDescription">{item.description}</p>
          <p className="cartColumnPrice">${item.price}</p>
          <p className="cartColumnQuantity">{item.quantity}</p>
          <p className="cartColumnTotal">${item.price * item.quantity}</p>
          <div className="cartColumnDelete">
            <button
              className="cartColumnDelete-button"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        </div>
      ))}
      <h3 className="total">Total: ${total}</h3>
      <div className="container-button">
        <button onClick={() => clear()}>Vaciar carrito</button>
        <button>Finalizar compra</button>
      </div>
    </div>
  ) : (
    <div className="cartContainer">
      <h1>Carrito</h1>
      <h3>El carrito de compras esta vacío</h3>
      <Link to={"/"} className="btnShowProducts">
        Ver productos
      </Link>
    </div>
  );
};

export default Cart;
