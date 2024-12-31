import type { PokemonResponse } from "@/types/pokemonDetails";
import { formatPokemonId } from "@/utils/formatter";
import PokemonType from "@components/PokemonType";
import {
	tvBackgroundPokemon,
	tvFlexContainer,
} from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import { m } from "motion/react";

interface PokemonCardProps {
	pokemon: PokemonResponse;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
	return (
		<m.div
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ amount: 0.4 }}
			transition={{
				duration: 0.45,
				bounce: 0.25,
				type: "spring",
			}}
			whileHover={{
				scale: 1.1,
				cursor: "pointer",
				transition: {
					duration: 0.45,
					bounce: 0.25,
					type: "spring",
				},
			}}
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
		</m.div>
	);
};

export default PokemonCard;
