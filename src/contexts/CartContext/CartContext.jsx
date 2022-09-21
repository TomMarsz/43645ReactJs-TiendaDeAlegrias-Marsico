import { createContext } from "react";

const CartContext = createContext;

const addItem = (item, quantity) => {};
const removeItem = (itemId) => {};
const clear = () => {};
const isInCart = () => {};

export default CartContext;
