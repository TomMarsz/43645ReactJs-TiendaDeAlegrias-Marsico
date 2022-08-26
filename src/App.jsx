import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/navbar";
import Title from "./components/Text/title";
import ItemListContainer from "./container/ItemListContainer/itemlistcontainer";

const App = ({searchText}) => {
	const [cart, setCart] = useState([])
	const [products, setProducts] = useState([])

	const searchProducts = async () => {
		const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchText}`) //api
		const data = await response.json()
			setProducts(data.results);
		}

	useEffect(() => {
		searchProducts()
	}, [searchText])

	return (
		<div className="App">
			<NavBar />
			<Title msj="Tienda de Alegrías"/>
			<ItemListContainer color="#5046e5" greeting="Bienvenidos" />
		</div>
	);
};

export default App;
