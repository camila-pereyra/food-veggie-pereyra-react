import { useState } from "react";
import AddCartButton from "../AddCartButton/AddCartButton";
import "./ItemCount.css";

const ItemCount = ({ stock }) => {
  const [items, setItems] = useState(1);
  const sumar = () => (items < stock ? setItems(items + 1) : items);
  const restar = () => (items > 1 ? setItems(items - 1) : items);

  return (
    <div className="container-item">
      <p className="container-item-stock">Stock disponible: {stock}</p>
      <div className="container-item-count">
        <button id="button-restar" onClick={restar}>
          -
        </button>
        <p> {items}</p>
        <button id="button-sumar" onClick={sumar}>
          +
        </button>
      </div>
      <AddCartButton />
    </div>
  );
};

export default ItemCount;
