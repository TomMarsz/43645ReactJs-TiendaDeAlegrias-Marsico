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
          <h2 className="text-indigo-700">
            Precio Total: <span className="font-bold">${totalPrice}</span>
          </h2>
          <button
            className="text-white  bg-red-400 hover:bg-red-700 text-base rounded-full py-1 px-3 mt-5 m-2"
            onClick={clear}
          >
            Vaciar Carrito
          </button>
          <button
            className="text-white  bg-emerald-400 hover:bg-emerald-700 text-base rounded-full py-1 px-3 mt-5 m-2"
            onClick={clear}
          >
            Comprar Carrito
          </button>
        </>
      ) : (
        <h2 className="font-bold">El carrito está vacío</h2>
      )}
    </>
  );
};

export default Cart;
