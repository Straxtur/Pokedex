import type { AllPokemonData } from "@/types/pokemonFetch";
import {
	FirstPageURL,
	getAllPokemon,
	getPokemonDetails,
} from "@api/pokemonAPI";
import { useInfiniteQuery, useQueries } from "@tanstack/react-query";

export const usePokemonQuery = () => {
	const pokemonQuery = useInfiniteQuery<AllPokemonData>({
		queryKey: ["pokemonCursor"],
		queryFn: ({ pageParam = FirstPageURL }) =>
			getAllPokemon(pageParam as string),
		retry: 0,
		initialPageParam: FirstPageURL,
		getNextPageParam: (lastPage) => {
			return lastPage.next || undefined;
		},
	});

	const pokemonDetailsQueries = useQueries({
		queries: pokemonQuery.data
			? pokemonQuery.data.pages.flatMap((page) =>
					page.results.map((pokemon) => ({
						queryKey: ["detailsPokemon", pokemon.name],
						queryFn: () => getPokemonDetails(pokemon.url),
						enabled: !!pokemonQuery.data,
					})),
				)
			: [],
	});

	return { pokemonQuery, pokemonDetailsQueries };
};
