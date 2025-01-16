import { usePokemon } from "@/context/PokemonDataContext";
import type { Types } from "@/types/pokemonTypes";
import { typeDefenses, typeVersus, types } from "@/utils/typesPokemon";
import TypeVersus from "@components/TypeVersus";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";

const Weaknesses = () => {
	const { pokemon } = usePokemon();

	return (
		<section
			className={tvFlexContainer({
				direction: "column",
				align: "start",
				justify: "center",
				width: "fill",
				height: "fit",
				class: "rounded-2xl bg-secondary-100 p-2 gap-4 overflow-x-scroll",
			})}
		>
			{/* debilidades */}

			<table
				className={tvText({
					color: "white",
					class: "border border-collapse w-full",
				})}
			>
				<thead>
					<TypeVersus />
				</thead>

				<tbody className="text-gray-200">
					{pokemon?.types.map((type) => (
						<tr key={type.slot}>
							<td className="flex gap-2 pl-2">
								{RenderType(type.type.name as string)}
							</td>

							{type.type.name !== undefined && rowCells(type.type.name)}
						</tr>
					))}

					{pokemon?.types.length !== undefined && pokemon?.types.length > 1 && (
						<tr>
							<td className="flex gap-2 pl-2">
								{RenderType(pokemon.types[0].type.name as string)}
								{RenderType(pokemon.types[1].type.name as string)}
							</td>

							{twoTypesWeaknesses(
								pokemon.types[0].type.name?.toLowerCase() as Exclude<
									Types,
									undefined
								>,
								pokemon.types[1].type.name?.toLowerCase() as Exclude<
									Types,
									undefined
								>,
							)}
						</tr>
					)}
				</tbody>
			</table>
		</section>
	);
};

const RenderType = (type: string) => {
	const pokemonType = types.find((t) => t.name.toLowerCase() === type);

	if (pokemonType) {
		return <pokemonType.icon size="25" />;
	}
};

const rowCells = (typePokemon: Exclude<Types, undefined>) =>
	typeVersus.map((type) => (
		<td key={type} className="px-4 py-2 text-center">
			x{typeDefenses[typePokemon][type] ?? "1"}
		</td>
	));

const twoTypesWeaknesses = (
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

export default Weaknesses;
