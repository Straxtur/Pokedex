import type { AllPokemonData } from "@/types/pokemonFetch";
export const FirstPageURL =
	"https://pokeapi.co/api/v2/pokemon?limit=1025" as string;

export const getAllPokemon = async (pageParam = 0): Promise<AllPokemonData> => {
	const offset = pageParam * 10; // Ajusta según tu lógica de pagination
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=50`,
	);
	const data = await response.json();
	return { ...data, page: pageParam }; // Incluye el número de página actual
};

export const getPokemonDetails = async (url: string) => {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("Error durante la petición");
	}
	return response.json();
};

export const getFilterPokemon = async (type: string) => {
	const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
	if (!response.ok) {
		throw new Error("Error durante la petición");
	}

	return await response.json();
};
