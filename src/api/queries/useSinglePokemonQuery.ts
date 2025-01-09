import type { PokemonResponse } from "@/types/pokemonDetails";
import type { PokemonEvolutionLineResponse } from "@/types/pokemonEvolutionLine";
import {
	getPokemonDetails,
	getPokemonEvolutionLine,
	getPokemonSpecie,
} from "@api/pokemonAPI";
import { useQuery } from "@tanstack/react-query";

interface UseSinglePokemonQueryProps {
	pokeName: string;
}
interface PokemonSpecieResponse {
	evolution_chain: {
		url: string;
	};
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

export const usePokemonLineEvolution = (pokeName: string) => {
	// detalles de la especie pokemon
	const speciesQuery = useQuery<PokemonSpecieResponse>({
		queryKey: ["detailsSpecie", pokeName],
		queryFn: () => getPokemonSpecie(pokeName),
		gcTime: Number.POSITIVE_INFINITY,
		staleTime: Number.POSITIVE_INFINITY,
	});

	const evolutionQuery = useQuery<PokemonEvolutionLineResponse>({
		queryKey: ["evolutionLine", pokeName],
		queryFn: () =>
			speciesQuery.data?.evolution_chain.url
				? getPokemonEvolutionLine(speciesQuery.data.evolution_chain.url)
				: Promise.reject(new Error("Missing evolution_chain URL")),
		gcTime: Number.POSITIVE_INFINITY,
		staleTime: Number.POSITIVE_INFINITY,
		enabled: !!speciesQuery.data,
	});

	return { evolutionQuery };
};
