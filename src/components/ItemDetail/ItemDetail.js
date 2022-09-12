import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";

const ItemDetail = ({ item }) => {
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
    <div className="itemDetail-container">
      <img src={item.image} alt={item.tittle} className="itemDetail-img" />
      <div className="itemDetail-containerInfo">
        <h3> {item.tittle}</h3>
        <p className="itemDetail-containerInfo-description">
          {item.description}
        </p>
        <p className="itemDetail-containerInfo-price">${item.price}</p>
        <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
