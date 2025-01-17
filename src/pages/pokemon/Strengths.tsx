import { usePokemon } from "@/context/PokemonDataContext";
import { useRenderType } from "@/hooks/useRenderType";
import { useRowTypeAttack } from "@/hooks/useRowTypes";
import TypeVersus from "@components/TypeVersus";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";

const Strengths = () => {
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
			{/* fortalezas */}

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

							{type.type.name !== undefined && useRowTypeAttack(type.type.name)}
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};

export default Strengths;
