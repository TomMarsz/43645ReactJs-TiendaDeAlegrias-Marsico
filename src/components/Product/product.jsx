import ItemCounter from "../ItemCounter/itemcounter";

const Product = ({ products }) => {
	return (
		<div className="bg-white">
			<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-indigo-500">
					Productos
				</h2>
				<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{products.map((product, index) => (
						<div key={index} className="group relative">
							<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
								<img
									src={product.thumbnail}
									alt={product.title}
									className="w-full h-full object-center object-cover lg:w-full lg:h-full"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-indigo-700">
										<a href={product.href}>
											<span aria-hidden="true" className="inset-0" />
											{product.title}
										</a>
									</h3>
								</div>
								<p className="text-sm font-medium text-gray-900">
									${product.price}
								</p>
							</div>
							<ItemCounter />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Product;
