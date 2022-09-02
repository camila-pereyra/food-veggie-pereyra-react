import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h3 className="itemListContainer-tittle">{greeting}</h3>
      <ItemCount stock="6" />
    </>
  );
};

export default ItemListContainer;
