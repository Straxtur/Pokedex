import type { PokemonLocalData } from "@/types/pokemonFetch";
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

export const useTwoTypesWeaknessesWithoutTd = (
	type1: Exclude<Types, undefined>,
	type2: Exclude<Types, undefined>,
	attacking: Exclude<Types, undefined>,
) => {
	const effectivenessType1 = typeDefenses[type1][attacking] ?? 1; // type 1 vs atacante
	const effectivenessType2 = typeDefenses[type2][attacking] ?? 1; // type 2 vs atacante

	const combinedEffectiveness =
		effectivenessType1 === 0 || effectivenessType2 === 0
			? 0
			: effectivenessType1 * effectivenessType2;

	const result = xDisplay(combinedEffectiveness);
	return result !== 1 ? result : 1;
};

const xDisplay = (value: number) => {
	if (value === 0.25) return 0.25;
	if (value === 0.5) return 0.5;
	if (value === 2) return 2;
	if (value === 4) return 4;
	if (value === 0) return 0;
	return 1;
};

export const useShowCoverageDefensive = (
	pokemon: PokemonLocalData,
	attacking: Exclude<Types, undefined>,
) => {
	const type1 = pokemon.types[0] as Exclude<Types, undefined>;
	const type2 = pokemon.types[1] ? pokemon.types[1] : undefined;

	let valueSingleType = 1; // by default x1

	if (!type2) {
		valueSingleType = typeDefenses[type1][attacking] ?? 1;
	}

	return type2 !== undefined
		? useTwoTypesWeaknessesWithoutTd(
				type1 as Exclude<Types, undefined>,
				type2 as Exclude<Types, undefined>,
				attacking as Exclude<Types, undefined>,
			)
		: valueSingleType;
};
