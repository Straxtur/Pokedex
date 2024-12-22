import { SearchIcon } from "@components/Icons";
import { tvFlexContainer } from "@styles/variants/container";

const Search = () => {
	return (
		<section
			className={tvFlexContainer({
				direction: "row",
				width: "fill",
				heigth: "fit",
				justify: "center",
				align: "center",
				class: "p-3",
			})}
		>
			<div
				className={tvFlexContainer({
					direction: "row",
					heigth: "fit",
					justify: "center",
					align: "center",
					class:
						"gap-3 px-6  bg-secondary-200 w-[755px] min-w-[293px]  rounded-3xl",
				})}
			>
				<button
					type="button"
					className="flex items-center justify-center h-full text-white"
				>
					<SearchIcon color="white" size="30" />
				</button>

				<input
					type="text"
					placeholder="Buscar Pokémon"
					className="w-full p-3 text-lg font-light text-white bg-transparent h-fit focus:outline-none font-pokemon"
					aria-placeholder="Pikachu"
				/>
			</div>
		</section>
	);
};

export default Search;
