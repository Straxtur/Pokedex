import fetch from "node-fetch";
import { writeFileSync } from "node:fs";

// Función para obtener los datos de los 200 primeros Pokémon
const obtenerPokemones = async (cantidad) => {
	// URL de la PokeAPI para obtener la lista de los primeros 200 Pokémon
	const url = `https://pokeapi.co/api/v2/pokemon?limit=${cantidad}&offset=0`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		// Obtener los detalles de cada Pokémon
		const pokemones = await Promise.all(
			data.results.map(async (pokemon) => {
				const pokemonData = await fetch(pokemon.url);
				const pokemonDetails = await pokemonData.json();

				return {
					id: pokemonDetails.id,
					name: pokemonDetails.name,
					sprites: {
						front_default:
							pokemonDetails.sprites.other["official-artwork"].front_default,
					},
					types: pokemonDetails.types.map((type) => type.type.name),
				};
			}),
		);

		// Guardar los datos en un archivo JSON
		writeFileSync("pokemons.json", JSON.stringify(pokemones, null, 2));
		console.log("Datos de los Pokémon guardados en pokemons.json");
	} catch (error) {
		console.error("Error al obtener los Pokémon:", error);
	}
};

// Llamar a la función para obtener los primeros 200 Pokémon
obtenerPokemones(1025);
