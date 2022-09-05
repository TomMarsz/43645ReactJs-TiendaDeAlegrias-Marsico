import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/itemlist";
import "./itemlistcontainer.css";

const ItemListContainer = ({ greeting, color }) => {
	console.log(greeting);
	const [products, setProducts] = useState([]);
	const searchProducts = async () => {
		try {
			const response = await fetch(
				`https://api.mercadolibre.com/sites/MLA/search?q=bazar`
			);
			const data = await response.json();
			setProducts(data.results);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		searchProducts();
	}, []);

	return (
		<>
			<h2 style={{ color: color }}> {greeting}</h2>
			<ItemList products={products} />
		</>
	);
};
export default ItemListContainer;
