import "./ItemListContainer.css";
import data from "../../data/data";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  //state
  const [products, setProducts] = useState([]);
  //ciclo de vida
  useEffect(() => {
    getProducts
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => console.log(error));
  }, []);
  //funcion: promesa que se resuelve luego de 2s
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  return (
    <>
      <h3 className="itemListContainer-tittle">{greeting}</h3>
      <ItemList list={products} />
    </>
  );
};

export default ItemListContainer;
