import type { AllPokemonData, PokemonType } from "@/types/pokemonFetch";
import {
	FirstPageURL,
	getAllPokemon,
	getFilterPokemon,
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
		/* evitamos que vuelvan a pedirse a la api */
		gcTime: Number.POSITIVE_INFINITY,
		staleTime: Number.POSITIVE_INFINITY,
	});

	const pokemonDetailsQueries = useQueries({
		queries: pokemonQuery.data
			? pokemonQuery.data.pages.flatMap((page) =>
					page.results.map((pokemon) => ({
						queryKey: ["detailsPokemon", pokemon.name],
						queryFn: () => getPokemonDetails(pokemon.url),
						enabled: !!pokemonQuery.data,
						gcTime: Number.POSITIVE_INFINITY,
						staleTime: Number.POSITIVE_INFINITY,
					})),
				)
			: [],
	});

	return { pokemonQuery, pokemonDetailsQueries };
};

export const usePokemonFilterQuery = (type = "fire") => {
	const pokemonQuery = useInfiniteQuery({
		queryKey: ["pokemonCursor", type],
		queryFn: ({ pageParam = type }) => getFilterPokemon(pageParam as string),
		retry: 0,
		initialPageParam: type,
		getNextPageParam: () => {
			return undefined;
		},
		gcTime: Number.POSITIVE_INFINITY,
		staleTime: Number.POSITIVE_INFINITY,
	});

	const pokemonDetailsQueries = useQueries({
		queries: pokemonQuery.data
			? pokemonQuery.data.pages.flatMap((page) =>
					page.pokemon.map((poke: PokemonType) => ({
						queryKey: ["detailsPokemon", poke.pokemon.name],
						queryFn: () => getPokemonDetails(poke.pokemon.url),
						enabled: !!pokemonQuery.data,
						gcTime: Number.POSITIVE_INFINITY,
						staleTime: Number.POSITIVE_INFINITY,
					})),
				)
			: [],
	});

	return { pokemonDetailsQueries, pokemonQuery };
};
