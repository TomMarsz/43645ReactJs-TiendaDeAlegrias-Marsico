import { Link } from "react-router-dom";

const Item = ({ title, thumbnail, price, order_backend }) => {
	return (
		<div className="group relative">
			<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none ">
				<img
					src={thumbnail}
					alt={title}
					className="w-full h-full object-center object-cover lg:w-full lg:h-full"
				/>
			</div>
			<div className="mt-4 flex flex-col justify-items-center">
				<div>
					<h3 className="text-lg font-medium text-indigo-700">
						<span aria-hidden="true" className="inset-0" />
						{title}
					</h3>
				</div>
				<p className="text-lg font-medium text-gray-900">${price}</p>
				<Link to={`/detail/${order_backend - 1}`}>
					<button className="text-white bg-indigo-700 text-base rounded-full p-1">
						Ver detalle del producto
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Item;
