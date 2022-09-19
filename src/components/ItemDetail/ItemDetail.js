import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [isAdd, setIsAdd] = useState(false);

  const handleOnAdd = (cantidad) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Agregaste ${cantidad} productos al carrito`,
      showConfirmButton: false,
      timer: 1500,
    });
    setIsAdd(true);
  };

  return (
    <div className="itemDetail-container">
      <img src={item.image} alt={item.tittle} className="itemDetail-img" />
      <div className="itemDetail-containerInfo">
        <h3> {item.tittle}</h3>
        <p className="itemDetail-containerInfo-description">
          {item.description}
        </p>
        <p className="itemDetail-containerInfo-price">${item.price}</p>
        {isAdd === false ? (
          <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd} />
        ) : (
          <Link to={"/carrito"} className="itemDetail-buttonCart">
            Ver carrito
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
