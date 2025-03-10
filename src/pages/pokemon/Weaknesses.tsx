import { usePokemon } from "@/context/PokemonDataContext";
import { useRenderType } from "@/hooks/useRenderType";
import { useRowTypeDefenses } from "@/hooks/useRowTypes";
import { useTwoTypesWeaknesses } from "@/hooks/useTwoTypesWeaknesses";
import type { Types } from "@/types/pokemonTypes";
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
								{useRenderType(type.type.name as string)}
							</td>

							{type.type.name !== undefined &&
								useRowTypeDefenses(type.type.name)}
						</tr>
					))}

					{pokemon?.types.length !== undefined && pokemon?.types.length > 1 && (
						<tr>
							<td className="flex gap-2 pl-2">
								{useRenderType(pokemon.types[0].type.name as string)}
								{useRenderType(pokemon.types[1].type.name as string)}
							</td>

							{useTwoTypesWeaknesses(
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

export default Weaknesses;
