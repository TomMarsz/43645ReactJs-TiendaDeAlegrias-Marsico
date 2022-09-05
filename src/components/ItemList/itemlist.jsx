import Item from "../Item/item";

const ItemList = ({ products }) => {
	return products.map((product) => {
		return (
			<Item
				title={product.title}
				thumbnail={product.thumbnail}
				price={product.price}
				permalink={product.permalink}
			/>
		);
	});
};
export default ItemList;
