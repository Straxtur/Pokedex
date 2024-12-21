function App() {
	return (
		<div className="flex flex-col w-full h-full pt-5 items-s min-w-[320px]">
			{/* hero */}
			<div className="flex flex-col items-center justify-center w-full lg:flex-row h-fit">
				<div className="flex flex-col items-center order-2 w-full gap-4 p-3 lg:items-start lg:order-1 justify-starts lg:w-fit lg:h-fit">
					<h1 className="items-center text-lg font-medium leading-10 text-center text-white font-pokemon text-h1">
						Descubre el mundo Pokemon
					</h1>

					<p className="text-lg font-light text-center text-white font-pokemon h-fit">
						Explora, Combate y conviertete en un maestro Pokemon
					</p>

					<div className="flex items-center justify-center gap-4 p-5 w-fit h-fit">
						<button
							className="px-5 py-3 font-light text-white bg-secondary-200 rounded-3xl font-pokemon text-buttonText w-fit h-fit"
							type="button"
						>
							Pokedex
						</button>
						<button
							className="px-5 py-3 font-light text-white bg-transparent border-2 border-white rounded-3xl font-pokemon w-fit h-fit text-buttonText"
							type="button"
						>
							Team Builder
						</button>
					</div>
				</div>

				{/* greninja */}
				<div className="order-1 h-full w-fit lg:order-2">
					<img
						className="filter saturate-200 w-80"
						src="greninja-hero.png"
						alt="greninja"
					/>
				</div>
			</div>

			{/* search */}

			<div className="flex items-center justify-center w-full p-3 h-fit">
				<div className="flex items-center justify-center gap-3 px-6 bg-secondary-200 w-[755px] min-w-[293px] h-fit rounded-3xl">
					<button
						type="button"
						className="flex items-center justify-center h-full text-white"
					>
						<SearchIcon color="white" size="40" />
					</button>

					<input
						type="text"
						placeholder="Buscar Pokémon"
						className="w-full p-3 text-lg font-light text-white bg-transparent h-fit focus:outline-none"
						aria-placeholder="Pikachu"
					/>
				</div>
			</div>
		</div>
	);
}

const SearchIcon = ({ color, size }: { color: string; size: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill={color}
			viewBox="0 0 256 256"
		>
			<path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
		</svg>
	);
};

export default App;
