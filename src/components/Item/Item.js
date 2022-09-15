import "./Item.css";

const Item = ({ tittle, description, price, image }) => {
  return (
    <>
      <img className="itemCard-image" src={image} alt={tittle} />
      <h3 className="itemCard-tittle">{tittle}</h3>
      <p className="itemCard-description">{description}</p>
      <p className="itemCard-price">${price}</p>
    </>
  );
};

export default Item;
