import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { idCategory } = useParams();
  const { idItem } = useParams();

  const getItem = async () => {
    try {
      const response = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${idCategory}`
      );
      const data = await response.json();
      setItem(data.results[idItem]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getItem();
  }, [idItem]);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
