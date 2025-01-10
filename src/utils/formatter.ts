/**
 * Formatea el ID del Pokémon para que tenga el formato #001, #023, etc.
 * @param id - El ID del Pokémon
 * @returns El ID formateado
 */

export const formatPokemonId = (id: number | undefined): string => {
	if (!id) return "Sin ID";
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

/**
 * Convierte una altura en centímetros a metros y la formatea como una cadena.
 * @param altura - La altura en centímetros.
 * @returns La altura en metros, formateada como una cadena con dos decimales y la unidad "m".
 * @throws Error si la altura es negativa.
 */
export function alturaEnMetros(altura: number) {
	if (altura < 0) {
		throw new Error("Por favor, proporciona una altura válida en centímetros.");
	}
	return `${(altura / 10).toFixed(2)} m`;
}

/**
 * Convierte un peso en hectogramos a kilogramos y lo formatea como una cadena.
 * @param peso - El peso en hectogramos.
 * @returns El peso en kilogramos, formateado como una cadena con dos decimales y la unidad "kg".
 * @throws Error si el peso es negativo.
 */
export function pesoEnKilos(peso: number) {
	if (peso < 0) {
		throw new Error("Por favor, proporciona una altura válida en centímetros.");
	}
	return `${(peso / 10).toFixed(2)} kg`;
}

export function capitalizeFirstLetter(string: string) {
	return string
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

/**
 * Calcula el porcentaje de una estadística basada en un valor máximo de 255.
 * @param stat - El valor de la estadística.
 * @returns El porcentaje de la estadística, redondeado hacia abajo al número entero más cercano.
 */
export function calculationOfStats(stat: number) {
	return Math.floor((stat / 255) * 100);
}
