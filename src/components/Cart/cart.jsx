import { useContext, useState, useEffect } from "react";
import { Context } from "../../contexts/CartContext/CartContext";
import CartItem from "./CartItem.jsx";

const Cart = () => {
	const { cart, clear, total } = useContext(Context);
	const [totalPrice, setTotalPrice] = useState(0);
	useEffect(() => {
		setTotalPrice(total());
	}, [cart]);

	return (
		<>
			{cart.length > 0 ? (
				<>
					{cart.map((element) => (
						<CartItem item={element} />
					))}
					<h2>${totalPrice}</h2>
					<button
						className="text-white  bg-indigo-400 hover:bg-indigo-700 text-base rounded-full py-1 px-3 m-2"
						onClick={clear}
					>
						Vaciar Carrito
					</button>
				</>
			) : (
				<h2>No hay nada en el carrito</h2>
			)}
		</>
	);
};
export default Cart;
