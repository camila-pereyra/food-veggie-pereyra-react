import Item from "../Item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";

const ItemList = ({ list }) => {
  return (
    <div className="itemList-container">
      {list.map((product) => {
        return (
          <div className="itemList-card" key={product.id}>
            <Item
              tittle={product.tittle}
              description={product.description}
              price={product.price}
              stock={product.stock}
              image={product.image}
            />
            <Link to={"/detail/" + product.id} className="itemList-link">
              + INFO
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
