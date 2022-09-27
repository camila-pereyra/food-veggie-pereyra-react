import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "items");
    getDocs(querySnapshot)
      .then((resp) => {
        const data = resp.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        if (categoryName === undefined) {
          setProducts(data);
        } else {
          setProducts(
            data.filter((product) => product.category === categoryName)
          );
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => getProducts(), 2000);
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
