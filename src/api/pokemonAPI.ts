import type { AllPokemonData } from "@/types/pokemonFetch";
export const FirstPageURL =
	"https://pokeapi.co/api/v2/pokemon?limit=1025" as string;

export const getAllPokemon = async (pageParam = 0): Promise<AllPokemonData> => {
	const offset = pageParam * 20; // pagination de 20 en 20
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`,
	);
	const data = await response.json();
	return { ...data, page: pageParam }; // Incluye el número de página actual
};

export const getPokemonDetails = async (pokeName: string) => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
	if (!response.ok) {
		throw new Error("Error durante la petición");
	}
	return response.json();
};
