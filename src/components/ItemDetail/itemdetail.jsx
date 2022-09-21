import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";
import Title from "../Title/Title";

const ItemDetail = ({ item }) => {
	const [quantity, setQuantity] = useState();
	const onAdd = (quantityToAdd) => {
		setQuantity(quantityToAdd);
	};

	return (
		<>
			<Title txt={`${item.title}`} color="text-indigo-400" />
			<div className="flex justify-center">
				<div className="m-4 items-end border-8 border-solid rounded-md p-4 border-indigo-200 w-80">
					<img
						src={item.thumbnail}
						alt={item.title}
						className="object-center object-cover "
					/>
				</div>
				<div className="mt-4 flex flex-col">
					<h1 className="text-indigo-500">${item.price}</h1>
					<ItemCounter stock={9} initial={1} onAdd={onAdd} />
					<Link to={"/cart"}>
						<button className="text-white  bg-indigo-400 hover:bg-indigo-700 text-base rounded-full p-1 mt-4">
							Finalizar compra
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ItemDetail;
