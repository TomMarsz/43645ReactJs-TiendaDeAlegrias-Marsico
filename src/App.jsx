import "./App.css";
import NavBar from "./components/NavBar/navbar";
import Title from "./components/Title/title";
import ItemDetailContainer from "./container/ItemDetailContainer/itemdetailcontainer";
import ItemListContainer from "./container/ItemListContainer/itemlistcontainer";

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Title txt="Tienda de Alegrías" color=" text-indigo-700" />
			{/* <ItemListContainer color="#5046e5" greeting="Bienvenidos" /> */}
			<ItemDetailContainer />
		</div>
	);
};
export default App;
