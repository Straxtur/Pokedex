import { tvFlexContainer } from "@styles/variants/container";
import PokemonCard from "./PokemonCard";

const ListPokemon = () => {
	return (
		<section
			className={tvFlexContainer({
				direction: "row",
				align: "center",
				justify: "center",
				width: "fill",
				height: "fit",
				class: "flex-wrap gap-5 p-9 max-w-[1430px] ",
			})}
		>
			<PokemonCard />
			<PokemonCard />
			<PokemonCard />
			<PokemonCard />
			<PokemonCard />
			<PokemonCard />
			<PokemonCard />
		</section>
	);
};

export default ListPokemon;
