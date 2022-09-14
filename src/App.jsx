import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/navBar";
import Title from "./components/Title/title";
import CheckoutContainer from "./container/CheckoutContainer/checkoutContainer";
import ContactFormContainer from "./container/ContactFormContainer/contactFormContainer";
import WhereContainer from "./container/WhereContainer/whereContainer";
import ItemDetailContainer from "./container/ItemDetailContainer/itemDetailContainer";
import ItemListContainer from "./container/ItemListContainer/itemListContainer";

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
					<Route
						path="/detail/:idCategory/:idItem"
						element={<ItemDetailContainer />}
					/>
					<Route path="/checkout" element={<CheckoutContainer />} />
					<Route path="/donde-estamos" element={<WhereContainer />} />
					<Route path="/contacto" element={<ContactFormContainer />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};
export default App;
