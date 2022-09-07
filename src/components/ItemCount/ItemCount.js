import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock }) => {
  const [items, setItems] = useState(1);
  const sumar = () => (items < stock ? setItems(items + 1) : items);
  const restar = () => (items > 1 ? setItems(items - 1) : items);

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
    </>
  );
};

export default ItemCount;
