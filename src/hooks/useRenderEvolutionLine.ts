import { LocalPokemonList } from "@/services/pokemons";
import type {
	Chain,
	PokemonEvolutionLineResponse,
} from "@/types/pokemonEvolutionLine";
import type { EvolutionLine } from "@/types/pokemonFetch";

export const useRenderEvolutionLine = (
	evolution: PokemonEvolutionLineResponse,
): EvolutionLine[] => {
	const evolutions: EvolutionLine[] = [];

	const processChain = (chain: Chain) => {
		const { name } = chain.species;
		const { evolution_details } = chain;
		const { evolves_to } = chain;

		const pokemonImage = LocalPokemonList.find(
			(poke) => poke.name === name,
		)?.sprites;

		evolutions.push({
			name,
			image: pokemonImage,
			evolution_details,
			evolves_to:
				evolves_to.length > 1 ? evolves_to.map((evo) => evo.species.name) : [],
		});

		for (const nextChain of chain.evolves_to) {
			processChain(nextChain);
		}
	};

	processChain(evolution.chain);
	return evolutions;
};
