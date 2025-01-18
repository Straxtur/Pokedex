import type { PokemonLocalData } from "@/types/pokemonFetch";
import PokemonType from "@components/PokemonType";
import {
	tvBackgroundPokemon,
	tvFlexContainer,
} from "@styles/variants/container";
import { tvText } from "@styles/variants/text";

interface Props {
	pokemon: PokemonLocalData;
	removePokemon: React.Dispatch<React.SetStateAction<PokemonLocalData[]>>;
}

const PokemonTeamCard: React.FC<Props> = ({ pokemon, removePokemon }) => {
	const handleRemovePokemon = (pokemon: PokemonLocalData) => {
		removePokemon((prevTeam) => prevTeam.filter((p) => p.id !== pokemon.id));
	};

	return (
		<button
			type="button"
			onClick={() => handleRemovePokemon(pokemon)}
			className={`${tvFlexContainer({
				direction: "column",
				justify: "start",
				align: "center",
				height: "fit",
				width: "fit",
				class: "gap-7 pt-4 pb-5 rounded-t-3xl min-w-[240px]",
			})} ${tvBackgroundPokemon({
				type: pokemon.types[0],
			})}`}
		>
			<figure
				className={`bg-red-200 rounded-full p-3 w-fit ${tvBackgroundPokemon({
					type: pokemon.types[0],
				})}`}
			>
				<img
					className="filter saturate-200"
					width="120px"
					src={pokemon.sprites}
					alt={pokemon.name}
				/>
			</figure>

			<div className="flex flex-col items-center justify-center w-fit h-fit">
				<h3
					className={tvText({
						color: "white",
						align: "center",
						weight: "normal",
						class: "text-3xl uppercase",
					})}
				>
					{pokemon.name}
				</h3>
				<div className="flex gap-4 p-2 w-fit h-fit">
					<PokemonType type={pokemon?.types[0]} />
					{pokemon?.types[1] && <PokemonType type={pokemon?.types[1]} />}
				</div>
			</div>
		</button>
	);
};

export default PokemonTeamCard;
