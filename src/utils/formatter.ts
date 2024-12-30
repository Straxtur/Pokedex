/**
 * Formatea el ID del Pokémon para que tenga el formato #001, #023, etc.
 * @param id - El ID del Pokémon
 * @returns El ID formateado
 */

export const formatPokemonId = (id: number): string => {
	return `#${id.toString().padStart(3, "0")}`;
};
