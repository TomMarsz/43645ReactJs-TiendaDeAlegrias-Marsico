import { useState } from "react";

const ItemCounter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div className="flex justify-center items-center space-x-4 mt-5">
			<button
				onClick={() => {
					setCounter(counter - 1);
				}}
				className="text-white bg-indigo-700 text-base rounded-full w-10 p-1"
			>
				-
			</button>
			<p className="text-indigo-500">{counter}</p>
			<button
				onClick={() => {
					setCounter(counter + 1);
				}}
				className="text-white bg-indigo-700 text-base rounded-full w-10 p-1"
			>
				+
			</button>
			<div>
				<button className="text-white bg-indigo-700 text-base rounded-full p-1">
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default ItemCounter;
