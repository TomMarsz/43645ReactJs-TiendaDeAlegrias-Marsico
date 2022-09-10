import Item from "../Item/item";

const ItemList = ({ products }) => {
	return products.map((product) => {
		console.log(product.length);
		return (
			<div className="flex justify-center m-4 items-end border-8 border-solid rounded-md p-4 border-indigo-200">
				<Item
					title={product.title}
					thumbnail={product.thumbnail}
					price={product.price}
					order_backend={product.order_backend}
				/>
			</div>
		);
	});
};
export default ItemList;
