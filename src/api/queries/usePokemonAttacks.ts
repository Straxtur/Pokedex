import type { moves } from "@/types/pokemonMoves";
import { getPokemonElementByURL } from "@api/pokemonAPI";
import { useQueries } from "@tanstack/react-query";

export const usePokemonAttacks = (moves: moves[]) => {
	const pokemonMoves = useQueries({
		queries: moves.map((move) => ({
			queryKey: ["moveDetails", move.move.url],
			queryFn: () => getPokemonElementByURL(move.move.url),
			staleTime: Number.POSITIVE_INFINITY,
			retry: 0,
			enabled: !!moves,
		})),
	});

	return { pokemonMoves };
};
