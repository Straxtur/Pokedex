import { useShowCoverageDefensive } from "@/hooks/useTwoTypesWeaknesses";
import type { PokemonLocalData } from "@/types/pokemonFetch";
import type { Types } from "@/types/pokemonTypes";
import { types } from "@/utils/typesPokemon";

interface Props {
	pokemonTeam: PokemonLocalData[];
}

const TableRows: React.FC<Props> = ({ pokemonTeam }) => {
	let totalWeaknesses = 0;
	let totalStrangeness = 0;

	const RenderCoverages = (pokemonTeam: PokemonLocalData, type: string) => {
		if (!pokemonTeam) return <span className="invisible">-</span>;

		const coverage = useShowCoverageDefensive(
			pokemonTeam,
			type.toLowerCase() as Exclude<Types, undefined>,
		);

		if (coverage > 1) totalWeaknesses++;
		if (coverage < 1) totalStrangeness++;

		return (
			<div className="flex flex-col items-center justify-center">
				<span className="text-xl">{coverage !== 1 ? `x${coverage}` : ""}</span>
			</div>
		);
	};

	return (
		<tbody className="text-gray-200">
			{types.map((type) => {
				totalWeaknesses = 0;
				totalStrangeness = 0;

				return (
					<tr key={type.name}>
						<td className=" flex justify-center items-center p-2 border border-[#0D9EDF]">
							{<type.icon size="30" />}
						</td>

						{/* equipo pokemon */}

						<td className="px-4 py-2 border border-[#0D9EDF]">
							{RenderCoverages(pokemonTeam[0], type.name)}
						</td>

						<td className="px-4 py-2 border border-[#0D9EDF]">
							{RenderCoverages(pokemonTeam[1], type.name)}
						</td>

						<td className="px-4 py-2 border border-[#0D9EDF]">
							{RenderCoverages(pokemonTeam[2], type.name)}
						</td>

						<td className="px-4 py-2 border border-[#0D9EDF]">
							{RenderCoverages(pokemonTeam[3], type.name)}
						</td>

						<td className="px-4 py-2 border border-[#0D9EDF]">
							{RenderCoverages(pokemonTeam[4], type.name)}
						</td>

						<td className="px-4 py-2 border border-[#0D9EDF]">
							{RenderCoverages(pokemonTeam[5], type.name)}
						</td>

						{/* totals */}

						<td className="px-4 py-2 border border-[#0D9EDF] bg-red-800 ">
							<span className="text-xl">
								{totalWeaknesses !== 0 ? totalWeaknesses : ""}
							</span>
						</td>

						<td className="px-4 py-2 border border-[#0D9EDF] bg-green-800">
							<span className="text-xl">
								{totalStrangeness !== 0 ? totalStrangeness : ""}
							</span>
						</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableRows;
