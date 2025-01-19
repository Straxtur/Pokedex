import type { PokemonLocalData } from "@/types/pokemonFetch";
import { useId } from "react";

interface Props {
	pokemonTeam: PokemonLocalData[];
}

const TableColumn: React.FC<Props> = ({ pokemonTeam }) => {
	const baseId = useId();

	return (
		<thead>
			<tr className="bg-gray-700">
				<th className="p-2 border border-[#0D9EDF] w-[100px]">🛡</th>

				{Array.from({ length: 6 }).map((_, index) => {
					const uniqueId = `${baseId}-${index}`;

					return (
						<th
							key={uniqueId}
							id={uniqueId}
							className="p-2 border border-[#0D9EDF] w-[150px]"
						>
							{pokemonTeam[index] ? (
								<div className="flex flex-col items-center justify-center">
									<img
										width="30px"
										src={pokemonTeam[index].sprites}
										alt={pokemonTeam[index].name}
									/>
									<span className="font-normal">{pokemonTeam[index].name}</span>
								</div>
							) : (
								<span className="invisible">-</span>
							)}
						</th>
					);
				})}

				<th className="p-2 border border-[#0D9EDF] w-[150px]">Weaknesses</th>
				<th className="p-2 border border-[#0D9EDF] w-[150px]">Strengths</th>
			</tr>
		</thead>
	);
};

export default TableColumn;
