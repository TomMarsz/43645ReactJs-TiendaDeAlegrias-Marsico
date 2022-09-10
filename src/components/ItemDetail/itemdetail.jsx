import ItemCounter from "../ItemCounter/itemcounter";
import Title from "../Title/title";

const onAdd = (quantity) => {
	alert(`Compro: ${quantity} Items`);
};

const ItemDetail = ({ item }) => {
	console.log(item);
	return (
		<>
			<Title txt={`${item.title}`} color="text-indigo-00" />
			<div className="group relative">
				<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
					<img
						src={item.thumbnail}
						alt={item.title}
						className="w-full h-full object-center object-cover lg:w-full lg:h-full"
					/>
				</div>
				<div className="mt-4 flex justify-between">
					<div>
						<h3 className="text-sm text-indigo-700">
							<a href={item.permalink}>
								<span aria-hidden="true" className="inset-0" />
								{item.title}
							</a>
						</h3>
					</div>
					<p className="text-sm font-medium text-gray-900">${item.price}</p>
					<ItemCounter stock={9} initial={1} onAdd={onAdd} />
				</div>
			</div>
		</>
	);
};

export default ItemDetail;
