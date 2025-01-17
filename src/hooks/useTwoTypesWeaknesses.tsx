import type { Types } from "@/types/pokemonTypes";
import { typeDefenses, typeVersus } from "@/utils/typesPokemon";

export const useTwoTypesWeaknesses = (
	type1: Exclude<Types, undefined>,
	type2: Exclude<Types, undefined>,
) =>
	typeVersus.map((attackingType) => {
		// Obtén las defensas de cada tipo contra el tipo atacante
		const effectivenessType1 = typeDefenses[type1][attackingType] ?? 1;
		const effectivenessType2 = typeDefenses[type2][attackingType] ?? 1;

		// Si cualquiera de los dos tipos tiene una defensa de 0 (inmunidad), el valor combinado será 0
		const combinedEffectiveness =
			effectivenessType1 === 0 || effectivenessType2 === 0
				? 0
				: effectivenessType1 * effectivenessType2;

		// Devuelve el valor redondeado como una celda
		return (
			<td key={attackingType} className="px-4 py-2 text-center">
				x{xDisplay(combinedEffectiveness)}
			</td>
		);
	});
const xDisplay = (value: number) => {
	if (value === 0.25) return "¼";
	if (value === 0.5) return "½";
	if (value === 2) return "2";
	if (value === 4) return "4";
	if (value === 0) return "0";
	return "1";
};
