import type { PokemonResponse } from "@/types/pokemonDetails";
import { formatPokemonId } from "@/utils/formatter";
import {
	tvBackgroundPokemon,
	tvFlexContainer,
} from "@styles/variants/container";
import { tvText } from "@styles/variants/text";

interface pokemonSplashPops {
	pokemon: PokemonResponse | undefined;
}

const PokemonSplash: React.FC<pokemonSplashPops> = ({ pokemon }) => {
	return (
		<figure
			className={`${tvFlexContainer({
				direction: "column",
				align: "center",
				justify: "center",
				width: "fill",
				height: "fit",
				class: "rounded-t-xl",
			})} ${tvBackgroundPokemon({
				type: pokemon?.types[0].type.name,
			})}`}
		>
			<h1
				className={tvText({
					color: "white",
					weight: "normal",
					class: "uppercase text-xl self-start md:self-center pl-2 pt-2",
				})}
			>
				{pokemon?.name} ({formatPokemonId(pokemon?.id)})
			</h1>

			<img
				className="max-w-64 filter saturate-200"
				src={pokemon?.sprites.other?.["official-artwork"].front_default}
				alt={pokemon?.name}
				draggable="false"
			/>
		</figure>
	);
};

export default PokemonSplash;
