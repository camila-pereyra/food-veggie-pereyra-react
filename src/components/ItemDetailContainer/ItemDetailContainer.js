import data from "../../data/data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState([]);

  const getItem = new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(data);
    }, 2000)
  );

  useEffect(() => {
    setIsLoading(true);
    getItem
      .then((response) => {
        setItem(response.find((item) => item.id === parseInt(id)));
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <h1 className="loader-container-text">
          Cargando detalle del producto...
        </h1>
      </div>
    );
  }
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
