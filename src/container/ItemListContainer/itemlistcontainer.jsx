import Product from "../../components/Product/product";
import "./itemlistcontainer.css";

const ItemListContainer = ({ greeting, color, products }) => {
	return (
		<>
			<h2 style={{ color: color }}> {greeting}</h2>
			<Product products={products} />
		</>
	);
};
export default ItemListContainer;
