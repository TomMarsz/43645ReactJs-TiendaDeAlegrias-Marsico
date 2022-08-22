import "./App.css";
import NavBar from "./components/NavBar/navbar";
import Title from "./components/Text/title";
import ItemListContainer from "./container/ItemListContainer/itemlistcontainer";

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Title msj="Tienda de Alegrías"/>
			<ItemListContainer />
		</div>
	);
};

export default App;
