import { SearchIcon } from "@components/Icons";
import { tvFlexContainer } from "@styles/variants/container";
import { m } from "motion/react";

interface SearchProps {
	bg: "bg-secondary-200" | "bg-secondary-100";
}

const Search: React.FC<SearchProps> = ({ bg }) => {
	return (
		<section
			className={tvFlexContainer({
				direction: "row",
				width: "fill",
				height: "fit",
				justify: "center",
				align: "center",
				class: "p-3",
			})}
		>
			<m.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 2,
					bounce: 0.2,
					type: "spring",
				}}
				className={tvFlexContainer({
					direction: "row",
					height: "fit",
					justify: "center",
					align: "center",
					class: `gap-3 px-6 w-[755px] min-w-[293px]  rounded-3xl ${bg}`,
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
			</m.div>
		</section>
	);
};

export default Search;
