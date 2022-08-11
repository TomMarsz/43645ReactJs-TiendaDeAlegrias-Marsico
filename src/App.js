import logo from "./logo.svg";
import "./App.css";

const App = () => {
	const persona = { nombre: "Tomas", altura: "184cm" };
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Hello World! {persona.nombre} mide {persona.altura}
				</p>
				{/* {ButtonComponent()} */}
				<ButtonComponent />
			</header>
		</div>
	);
};

const ButtonComponent = () => {
	return <button>Hola Mundo</button>;
};

export default App;
