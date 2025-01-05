import { LocalPokemonList } from "@/services/pokemons";
import type { AllPokemonData, PokemonLocalData } from "@/types/pokemonFetch";
import { useMemo } from "react";

type Pages = AllPokemonData[] | undefined;

const useLocalData = (
	pages: Pages,
	currentPage: number,
): PokemonLocalData[] => {
	return useMemo(() => {
		if (pages?.find((page) => page.page === currentPage)) {
			const pokemonPaginated = pages.find((page) => page.page === currentPage);

			return pokemonPaginated?.results
				.map((pokemon) => {
					const localPokemon = LocalPokemonList.find(
						(localPokemon) => localPokemon.name === pokemon.name,
					);
					return localPokemon ? localPokemon : undefined;
				})
				.filter((pokemon) => pokemon !== undefined) as PokemonLocalData[];
		}
		return [];
	}, [pages, currentPage]);
};

export default useLocalData;
