import { useCurrentPage } from "@/context/context";
import type { AllPokemonData } from "@/types/pokemonFetch";
import { getAllPokemon } from "@api/pokemonAPI";
import { useInfiniteQuery } from "@tanstack/react-query";

export const usePokemonQuery = () => {
	const { currentPage } = useCurrentPage();

	const pokemonQuery = useInfiniteQuery<AllPokemonData>({
		queryKey: ["pokemonCursor"],
		queryFn: ({ pageParam = 0 }) => getAllPokemon(pageParam as number),
		retry: 0,
		initialPageParam: 0,
		getNextPageParam: () => {
			return currentPage + 1;
		},
		getPreviousPageParam: () => {
			return currentPage < 1 ? undefined : currentPage - 1;
		},
		/* evitamos que vuelvan a pedirse a la api */
		gcTime: Number.POSITIVE_INFINITY,
		staleTime: Number.POSITIVE_INFINITY,
	});

	return { pokemonQuery };
};

/* export const usePokemonFilterQuery = (type = "fire") => {
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
 */
