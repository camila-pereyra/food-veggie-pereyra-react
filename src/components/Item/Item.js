import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import Swal from "sweetalert2";

const Item = ({ tittle, description, price, stock, image }) => {
  const handleOnAdd = (cantidad) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Agregaste ${cantidad} productos al carrito`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <img className="itemCard-image" src={image} alt={tittle} width="500px" />
      <h3 className="itemCard-tittle">{tittle}</h3>
      <p className="itemCard-description">{description}</p>
      <p className="itemCard-price">${price}</p>
      <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
    </>
  );
};

export default Item;
