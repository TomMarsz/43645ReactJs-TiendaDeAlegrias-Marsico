import ItemCounter from "../ItemCounter/itemcounter";

const onAdd = (quantity) => {
	alert(`Compro: ${quantity} Items`);
};

const Item = ({ title, thumbnail, price, permalink }) => {
	return (
		<>
			<div className="group relative">
				<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
					<img
						src={thumbnail}
						alt={title}
						className="w-full h-full object-center object-cover lg:w-full lg:h-full"
					/>
				</div>
				<div className="mt-4 flex justify-between">
					<div>
						<h3 className="text-sm text-indigo-700">
							<a href={permalink}>
								<span aria-hidden="true" className="inset-0" />
								{title}
							</a>
						</h3>
					</div>
					<p className="text-sm font-medium text-gray-900">${price}</p>
					<ItemCounter stock={9} initial={1} onAdd={onAdd} />
				</div>
			</div>
		</>
	);
};

export default Item;
