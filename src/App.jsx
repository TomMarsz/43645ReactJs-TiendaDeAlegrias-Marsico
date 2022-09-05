import "./App.css";
import NavBar from "./components/NavBar/navbar";
import Title from "./components/Title/title";
import ItemListContainer from "./container/ItemListContainer/itemlistcontainer";

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Title txt="Tienda de Alegrías" />
			<ItemListContainer color="#5046e5" greeting="Bienvenidos" />
			{/* ItemDetailContainer */}
		</div>
	);
};
export default App;
