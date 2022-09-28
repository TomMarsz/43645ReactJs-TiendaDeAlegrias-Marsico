import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting, color }) => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const items = collection(db, "items");
    getDocs(items).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(docs);
    });
  }, []);

  return (
    <>
      <h2 style={{ color: color }}> {greeting}</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
