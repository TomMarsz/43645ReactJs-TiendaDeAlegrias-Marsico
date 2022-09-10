import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/itemlist";
import "./itemlistcontainer.css";

const ItemListContainer = ({ greeting, color }) => {
	const [products, setProducts] = useState([]);
	const { idCategory } = useParams();
	const searchProducts = async () => {
		try {
			const response = await fetch(
				`https://api.mercadolibre.com/sites/MLA/search?q=${idCategory}`
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

	console.log(products);

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
