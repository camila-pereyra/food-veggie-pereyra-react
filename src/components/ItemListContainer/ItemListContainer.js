import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import Carrusel from "../Carrusel/Carrusel";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = () => {
    const db = getFirestore();
    const queryBase = collection(db, "items");
    const querySnapshot = categoryName
      ? query(queryBase, where("category", "==", categoryName))
      : queryBase;
    getDocs(querySnapshot)
      .then((resp) => {
        const data = resp.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getProducts();
  }, [categoryName]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (!categoryName) {
    return (
      <>
        <Carrusel />
        <h3 className="itemListContainer-tittle">Nuestros productos</h3>
        <ItemList list={products} />
      </>
    );
  }
  return (
    <>
      <h3 className="itemListContainer-tittle">{categoryName}</h3>
      <ItemList list={products} />
    </>
  );
};

export default ItemListContainer;
