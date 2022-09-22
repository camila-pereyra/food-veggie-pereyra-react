import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const sumar = () => (count < stock ? setCount(count + 1) : count);
  const restar = () => (count > 1 ? setCount(count - 1) : count);
  const handleOnClick = () => {
    if (count <= stock) {
      onAdd(count);
    }
  };
  return (
    <>
      <p className="itemCount-stock">Stock disponible: {stock}</p>
      <div className="itemCount-buttonContainer">
        <button id="button-restar" onClick={restar}>
          -
        </button>
        <p> {count}</p>
        <button id="button-sumar" onClick={sumar}>
          +
        </button>
      </div>
      <button onClick={handleOnClick} className="addCart-button">
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
