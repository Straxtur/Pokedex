import type { PokemonLocalData } from "@/types/pokemonFetch";
import { matchSorter } from "match-sorter";

export const searchPokemonByName = (
	pokemonList: PokemonLocalData[],
	searchQuery: string,
): PokemonLocalData[] => {
	return matchSorter(pokemonList, searchQuery, {
		keys: ["name"], // Filtrar por el nombre del Pokémon
		threshold: matchSorter.rankings.CONTAINS, // Nivel de coincidencia
	});
};
