import type { PokemonLocalData } from "@/types/pokemonFetch";
import type { Types } from "@/types/pokemonTypes";
import { matchSorter } from "match-sorter";
import { isEmptyTextInput } from "./formatter";

export const searchPokemon = (
	pokemonList: PokemonLocalData[],
	searchQuery: string,
	pokemonType?: Types,
): PokemonLocalData[] => {
	let pokemons = pokemonList;

	if (pokemonType !== undefined) {
		pokemons = pokemonList.filter((type) => type.types.includes(pokemonType));
	}

	if (isEmptyTextInput(searchQuery)) return pokemons;

	const searchByName = matchSorter(pokemons, searchQuery, {
		keys: ["name"], // Filtrar por el nombre del Pokémon
		threshold: matchSorter.rankings.CONTAINS, // Nivel de coincidencia
	});

	return searchByName;
};
