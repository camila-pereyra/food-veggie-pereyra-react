import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [items, setItems] = useState(initial);
  const sumar = () => (items < stock ? setItems(items + 1) : items);
  const restar = () => (items > 1 ? setItems(items - 1) : items);
  const handleOnAdd = () => {
    if (items <= stock) onAdd(items);
  };
  return (
    <>
      <p className="itemCount-stock">Stock disponible: {stock}</p>
      <div className="itemCount-buttonContainer">
        <button id="button-restar" onClick={restar}>
          -
        </button>
        <p> {items}</p>
        <button id="button-sumar" onClick={sumar}>
          +
        </button>
      </div>
      <button onClick={handleOnAdd} className="addCart-button">
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
