/**
 * Formatea el ID del Pokémon para que tenga el formato #001, #023, etc.
 * @param id - El ID del Pokémon
 * @returns El ID formateado
 */

export const formatPokemonId = (id: number): string => {
	return `#${id.toString().padStart(3, "0")}`;
};

/**
 * Comprueba si el campo es un string vació o no
 * @param text - string del campo
 * @returns true: campo vacío | false: campo con texto
 */
export const isEmptyTextInput = (text: string): boolean => {
	return text.trim() === "";
};

/**
 * Limpia el texto de comenzar con espacios
 * @param text - string del campo
 * @returns texto sin espacios al principio
 */
export const cleanInput = (text: string): string => {
	let newText = text;

	// Evitar que el input empiece con espacios
	if (newText.length === 1 && newText === " ") {
		newText = ""; // Si solo hay un espacio, lo limpiamos
	}

	// Evitar múltiples espacios consecutivos
	return newText.replace(/^\s+/, "");
};
