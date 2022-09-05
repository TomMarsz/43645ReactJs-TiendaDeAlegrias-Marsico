import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/itemdetail";

const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);
	const getItem = async () => {
		try {
			const response = await fetch(
				`https://api.mercadolibre.com/sites/MLA/search?q=bazar`
			);
			const data = await response.json();
			setItem(data.results[0]);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getItem();
	}, []);
	return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
