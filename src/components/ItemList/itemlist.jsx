import Item from "../Item/Item";

const ItemList = ({ products, category }) => {
	return products.map((product) => {
		return (
			<div className="flex justify-center m-4 items-end border-8 border-solid rounded-md p-4 border-indigo-200">
				<Item
					title={product.title}
					thumbnail={product.thumbnail}
					price={product.price}
					order={product.order_backend}
					category={category}
				/>
			</div>
		);
	});
};
export default ItemList;
