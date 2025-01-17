import { usePokemon } from "@/context/PokemonDataContext";
import { capitalizeFirstLetter } from "@/utils/formatter";
import { usePokemonAttacks } from "@api/queries/usePokemonAttacks";
import ErrorLoadSomeFetch from "@components/ErrorLoadSomeFetch";
import PokemonType from "@components/PokemonType";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";

const Attacks = () => {
	const { pokemon } = usePokemon();

	const { pokemonMoves } = usePokemonAttacks(pokemon?.moves ?? []);

	if (pokemonMoves.some((err) => err.error)) {
		console.error("error al obtener todos los movimientos");

		return (
			<ErrorLoadSomeFetch
				message={
					"Something went wrong while getting the moves, pelase retry later"
				}
			/>
		);
	}

	if (pokemonMoves.some((query) => query.isLoading)) {
		return <div>Loading...</div>;
	}

	return (
		<section
			className={tvFlexContainer({
				direction: "column",
				align: "center",
				justify: "center",
				width: "fill",
				height: "fit",
				class:
					"rounded-2xl bg-secondary-100 p-2 gap-4 min-w-[320px] overflow-x-auto",
			})}
		>
			<div className="w-full overflow-x-auto min-w-[320px]">
				<table
					className={tvText({
						color: "white",
						class: "border border-collapse w-full",
					})}
				>
					<thead>
						<tr className="bg-gray-700">
							<th className="px-4 py-2 border border-[#0D9EDF]">Name</th>
							<th className="px-4 py-2 border border-[#0D9EDF]">Type</th>
							<th className="px-4 py-2 border border-[#0D9EDF]">Category</th>
							<th className="px-4 py-2 border border-[#0D9EDF]">Power</th>
							<th className="px-4 py-2 border border-[#0D9EDF]">Effect</th>
						</tr>
					</thead>

					<tbody className="text-gray-200">
						{pokemonMoves.map(({ data: move }) => (
							<tr
								key={move.id}
								className="odd:bg-transparent even:bg-secondary-200"
							>
								<td className="px-4 py-2 border border-[#0D9EDF]">
									{capitalizeFirstLetter(move.name)}
								</td>
								<td className="px-4 py-2 border border-[#0D9EDF]">
									{<PokemonType type={move.type.name} />}
								</td>
								<td className="px-4 py-2 border border-[#0D9EDF]">
									{move.damage_class.name}
								</td>
								<td className="px-4 py-2 border border-[#0D9EDF]">
									{move.power ?? "-"}
								</td>
								<td className="px-4 py-2 border border-[#0D9EDF]">
									{move.effect_entries[0]?.short_effect}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default Attacks;
