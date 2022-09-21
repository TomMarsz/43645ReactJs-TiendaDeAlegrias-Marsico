import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const CartContext = ({ children }) => {
	const [cart, setCart] = useState([]);
	useEffect(() => {
		//Traer desde el local storage el cart
	}, []);

	const addItem = (item, quantity) => {
		const before = isInCart(item.order);
		if (before) {
			const arr = cart.filter((e) => e.order !== item.order);
			item.quantity = quantity + before.quantity;
			arr.push(item);
			setCart(arr);
		} else {
			item.quantity = quantity;
			setCart([...cart, item]); //! No me funciona el spread op
		}
		//Guardas el cart en el local storage
	};
	const removeItem = (itemId) => {
		setCart(cart.filter((e) => e.order !== itemId));
	};

	const clear = () => {
		setCart([]);
	};

	const isInCart = (itemId) => {
		return cart.find((e) => e.order === itemId);
	};

	const total = () => {
		let tot = 0;
		cart.forEach((item) => {
			tot = tot + item.price * item.quantity;
		});
		return tot;
	};

	return (
		<Context.Provider value={{ addItem, cart, clear, removeItem, total }}>
			{children}
		</Context.Provider>
	);
};

export default CartContext;
