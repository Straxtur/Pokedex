import type { PokemonLocalData } from "@/types/pokemonFetch";
import {
	tvBackgroundPokemon,
	tvFlexContainer,
} from "@styles/variants/container";

interface Props {
	pokemon: PokemonLocalData;
}

const PokemonListCard: React.FC<Props> = ({ pokemon }) => {
	return (
		<div
			className={`${tvFlexContainer({
				direction: "column",
				align: "center",
				justify: "center",
				width: "fit",
				height: "fit",
				class: "gap-4 rounded-xl",
			})} ${tvBackgroundPokemon({
				type: pokemon.types[0],
			})}`}
		>
			<figure className="w-fit">
				<img
					className="max-w-20 filter saturate-200"
					src={pokemon.sprites}
					alt={pokemon.name}
					draggable="false"
				/>
			</figure>
		</div>
	);
};

export default PokemonListCard;
