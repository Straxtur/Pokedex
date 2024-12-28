export const getAllPokemon = async () => {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon");
	if (!response.ok) {
		throw new Error("Error durante la petición");
	}
	const data = await response.json();
	return data;
};

export const getPokemonDetails = async (url: string) => {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("Error durante la petición");
	}
	return response.json();
};
