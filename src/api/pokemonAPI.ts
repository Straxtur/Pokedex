import type { AllPokemonData } from "@/types/pokemonFetch";
export const FirstPageURL =
	" https://pokeapi.co/api/v2/pokemon?offset=0&limit=20" as string;

export const getAllPokemon = async (
	url = FirstPageURL,
): Promise<AllPokemonData> => {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("Error durante la petición");
	}

	return await response.json();
};

export const getPokemonDetails = async (url: string) => {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("Error durante la petición");
	}
	return response.json();
};
