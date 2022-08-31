import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/navbar";
import Title from "./components/Text/title";
import ItemListContainer from "./container/ItemListContainer/itemlistcontainer";

const App = ({ searchText }) => {
	const [cart, setCart] = useState([]);
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
	}, [searchText]);

	console.log(cart);

	return (
		<div className="App">
			<NavBar />
			<Title titleTxt="Tienda de Alegrías" />
			<ItemListContainer
				color="#5046e5"
				greeting="Bienvenidos"
				products={products}
			/>
		</div>
	);
};

export default App;
