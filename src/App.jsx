import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";

const App = () => {
	const persona = { nombre: "Tomas", altura: "184cm" };
	return (
		<div className="App" style={{fontSize: "20px", borderBottom: "1px solid red"}}>
			<Navbar />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Hello World! {persona.nombre} mide {persona.altura}
				</p>
				<ButtonComponent />
			</header>
		</div>
	);
};

const ButtonComponent = () => {
	const showAlert = (e) => {
		alert("Esto es un alerta")
	}
	return <button onClick={showAlert}>Hola Mundo</button>;
};

export default App;
