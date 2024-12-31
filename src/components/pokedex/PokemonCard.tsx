import type { PokemonResponse } from "@/types/pokemonDetails";
import { formatPokemonId } from "@/utils/formatter";
import PokemonType from "@components/PokemonType";
import {
	tvBackgroundPokemon,
	tvFlexContainer,
} from "@styles/variants/container";
import { tvText } from "@styles/variants/text";

interface PokemonCardProps {
	pokemon: PokemonResponse;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
	return (
		<div
			className={`${tvFlexContainer({
				direction: "column",
				align: "center",
				justify: "center",
				width: "fit",
				height: "fit",
				class: "gap-4 rounded-3xl",
			})} ${tvBackgroundPokemon({
				type: pokemon.types[0].type.name,
			})}`}
		>
			<figure className="w-fit">
				<img
					className="max-w-64 filter saturate-200"
					src={
						pokemon.sprites.other?.["official-artwork"].front_default ??
						pokemon.sprites.other?.home.front_default
					}
					alt={pokemon.name}
				/>
			</figure>
			<p
				className={tvText({
					color: "white",
					align: "center",
					weight: "normal",
					class: "text-3xl uppercase",
				})}
				style={{
					wordWrap: "break-word",
					overflowWrap: "break-word",
					maxWidth: "255px",
				}}
			>
				{pokemon.name}
			</p>
			<div
				className={tvFlexContainer({
					direction: "row",
					align: "center",
					justify: "center",
					class: "gap-2",
				})}
			>
				<PokemonType type={pokemon.types[0].type.name} />
				{pokemon.types[1] && <PokemonType type={pokemon.types[1].type.name} />}
			</div>
			<h5
				className={tvText({
					color: "white",
					align: "center",
					weight: "normal",
					class: "text-2xl",
				})}
			>
				{formatPokemonId(pokemon.id)}
			</h5>
		</div>
	);
};

export default PokemonCard;
