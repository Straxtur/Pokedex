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
