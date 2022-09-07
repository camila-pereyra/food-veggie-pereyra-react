import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ list }) => {
  return (
    <div className="itemList-container">
      {list.map((product) => {
        return (
          <Item
            key={product.id}
            tittle={product.tittle}
            description={product.description}
            price={product.price}
            stock={product.stock}
            image={product.image}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
