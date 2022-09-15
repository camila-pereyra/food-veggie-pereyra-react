import "./ItemListContainer.css";
import data from "../../data/data";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  useEffect(() => {
    setIsLoading(true);
    getProducts
      .then((response) => {
        if (categoryName === undefined) {
          setProducts(response);
        } else {
          setProducts(
            response.filter((product) => product.category === categoryName)
          );
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryName]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <>
      <h3 className="itemListContainer-tittle">{greeting}</h3>
      <ItemList list={products} />
    </>
  );
};

export default ItemListContainer;
