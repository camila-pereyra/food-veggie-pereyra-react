import ItemCount from "../ItemCount/ItemCount";
import AddCartButton from "../AddCartButton/AddCartButton";
import "./Item.css";

const Item = ({ tittle, description, price, stock, image }) => {
  return (
    <>
      <div className="itemCard">
        <img
          className="itemCard-image"
          src={image}
          alt={tittle}
          width="500px"
        />
        <h3 className="itemCard-tittle">{tittle}</h3>
        <p className="itemCard-description">{description}</p>
        <p className="itemCard-price">${price}</p>
        <ItemCount stock={stock} />
        <AddCartButton />
      </div>
    </>
  );
};

export default Item;
