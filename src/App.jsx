import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/navbar";
import Title from "./components/Title/title";
import CheckoutContainer from "./container/CheckoutContainer/checkoutcontainer";
import ContactFormContainer from "./container/ContactFormContainer/contactformcontainer";
import DondeEstamosContainer from "./container/DondeEstamosContainer/dondeestamoscontainer";
import ItemDetailContainer from "./container/ItemDetailContainer/itemdetailcontainer";
import ItemListContainer from "./container/ItemListContainer/itemlistcontainer";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Title txt="Tienda de Alegrías" color=" text-indigo-700" />
				<Routes>
					<Route
						path="/"
						element={
							<ItemListContainer color="#5046e5" greeting="Bienvenido" />
						}
					/>
					<Route
						path="/category/:idCategory"
						element={
							<ItemListContainer color="#5046e5" greeting="Bienvenido" />
						}
					/>
					<Route path="/detail/:idItem" element={<ItemDetailContainer />} />
					<Route path="/checkout" element={<CheckoutContainer />} />
					<Route path="/donde-estamos" element={<DondeEstamosContainer />} />
					<Route path="/contacto" element={<ContactFormContainer />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};
export default App;
