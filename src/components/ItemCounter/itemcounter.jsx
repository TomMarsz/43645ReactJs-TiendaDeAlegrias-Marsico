import { useState } from "react";

const ItemCounter = ({ stock, initial, onAdd }) => {
	const [counter, setCounter] = useState(initial);
	const [cart, setCart] = useState([]);

	return (
		<div className="flex justify-center items-center space-x-4 mt-5">
			<button
				onClick={() => {
					setCounter(counter - 1);
					if (counter === 1) {
						alert("No puede sumar 0 productos a su carrito");
						setCounter(initial);
					}
				}}
				className="text-white bg-indigo-700 text-base rounded-full w-10 p-1"
			>
				-
			</button>
			<p className="text-indigo-500">{counter}</p>
			<button
				onClick={() => {
					setCounter(counter + 1);
					if (counter > stock) {
						alert("No hay más stock");
						setCounter(initial);
					}
				}}
				className="text-white bg-indigo-700 text-base rounded-full w-10 p-1"
			>
				+
			</button>
			<div>
				<button
					className="text-white bg-indigo-700 text-base rounded-full p-1"
					onClick={() => {
						onAdd(counter);
					}}
				>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default ItemCounter;
