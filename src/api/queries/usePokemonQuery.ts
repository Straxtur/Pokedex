import type { AllPokemonData } from "@/types/pokemonFetch";
import { getAllPokemon, getPokemonDetails } from "@api/pokemonAPI";
import { useQueries, useQuery } from "@tanstack/react-query";

export const usePokemonQuery = () => {
	const pokemonQuery = useQuery<AllPokemonData>({
		queryKey: ["pokemon"],
		queryFn: getAllPokemon,
		retry: 0,
	});

	const pokemonDetailsQueries = useQueries({
		queries: pokemonQuery.data
			? pokemonQuery.data.results.map((pokemon) => {
					return {
						queryKey: ["detailsPokemon", pokemon.name],
						queryFn: () => getPokemonDetails(pokemon.url),
						enabled: !!pokemonQuery.data,
					};
				})
			: [],
	});

	return { pokemonQuery, pokemonDetailsQueries };
};
