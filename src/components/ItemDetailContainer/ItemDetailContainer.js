import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState([]);

  const getItems = () => {
    const db = getFirestore();
    const queryDoc = doc(db, "items", id);
    getDoc(queryDoc)
      .then((resp) => {
        setItem({ id: id, ...resp.data() });
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getItems();
    }, 2000);
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
