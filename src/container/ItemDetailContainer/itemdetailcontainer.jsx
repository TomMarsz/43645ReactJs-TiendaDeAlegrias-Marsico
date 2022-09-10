import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/itemdetail";

const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);
	// const { idCategory } = useParams();
	const { idItem } = useParams();
	const getItem = async () => {
		try {
			const response = await fetch(
				`https://api.mercadolibre.com/sites/MLA/search?q=platos`
			);
			const data = await response.json();
			setItem(data.results[idItem]);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getItem();
	}, []);

	console.log(item);

	return (
		<div>
			<ItemDetail item={item} />;
		</div>
	);
};

export default ItemDetailContainer;
