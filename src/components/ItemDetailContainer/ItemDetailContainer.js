import data from "../../data/data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    getItem
      .then((response) => {
        setItem(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const getItem = new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(data.find((product) => product.id == id));
    }, 2000)
  );

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
