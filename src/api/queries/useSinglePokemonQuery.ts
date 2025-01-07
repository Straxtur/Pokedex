import type { PokemonResponse } from "@/types/pokemonDetails";
import { getPokemonDetails } from "@api/pokemonAPI";
import { useQuery } from "@tanstack/react-query";

interface UseSinglePokemonQueryProps {
	pokeName: string;
}

export const useSinglePokemonQuery = ({
	pokeName,
}: UseSinglePokemonQueryProps) => {
	const pokemonQuery = useQuery<PokemonResponse>({
		queryKey: ["pokemon", pokeName],
		queryFn: () => getPokemonDetails(pokeName),
		gcTime: Number.POSITIVE_INFINITY,
		staleTime: Number.POSITIVE_INFINITY,
	});

	return { pokemonQuery };
};
