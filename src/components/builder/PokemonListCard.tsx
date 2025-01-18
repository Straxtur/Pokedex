import type { PokemonLocalData } from "@/types/pokemonFetch";
import {
	tvBackgroundPokemon,
	tvFlexContainer,
} from "@styles/variants/container";
import { useState } from "react";

interface Props {
	pokemon: PokemonLocalData;
	pokemonTeam: PokemonLocalData[];
	addPokemon: React.Dispatch<React.SetStateAction<PokemonLocalData[]>>;
}

const PokemonListCard: React.FC<Props> = ({
	pokemon,
	pokemonTeam,
	addPokemon,
}) => {
	const [showName, setShowName] = useState(false);

	const handleAddPokemon = (pokemon: PokemonLocalData) => {
		if (pokemonTeam.find((pok) => pok.id === pokemon.id)) return;

		if (pokemonTeam.length < 6)
			addPokemon((prevTeam) => [...prevTeam, pokemon]);
	};

	return (
		<button
			type="button"
			onClick={() => handleAddPokemon(pokemon)}
			onMouseEnter={() => setShowName(true)}
			onMouseLeave={() => setShowName(false)}
			id="pokemonCard"
			className={`${tvFlexContainer({
				direction: "column",
				align: "center",
				justify: "center",
				width: "fit",
				height: "fit",
				class: "gap-4 rounded-xl relative cursor-pointer",
			})} ${tvBackgroundPokemon({
				type: pokemon.types[0],
			})}`}
		>
			{showName && (
				<div className="absolute bottom-0 z-10 text-white bg-gray-600 rounded-md opacity-100 bg-opacity-60">
					{pokemon.name}
				</div>
			)}
			<figure className="w-fit">
				<img
					className="max-w-20 filter saturate-200 "
					src={pokemon.sprites}
					alt={pokemon.name}
					draggable="false"
				/>
			</figure>
		</button>
	);
};

export default PokemonListCard;
