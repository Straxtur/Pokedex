import type { Species } from "@/types/pokemonDetails";
import { calculationOfStats, capitalizeFirstLetter } from "@/utils/formatter";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";

interface statProp {
	stat: Species;
	base_stat: number;
}

const ShowStat: React.FC<statProp> = ({ stat, base_stat }) => {
	return (
		<div
			className={`${tvFlexContainer({
				height: "fit",
				width: "fill",
				justify: "center",
				align: "center",
				class: "gap-3 px-2",
			})}`}
		>
			<div className="min-w-[56px] w-[132px]">
				<span
					className={tvText({
						color: "white",
						weight: "normal",
						size: "buttonText",
					})}
				>
					{capitalizeFirstLetter(stat.name)} {base_stat}
				</span>
			</div>
			<div
				className={tvFlexContainer({
					width: "fill",
					class:
						"border border-[#00FF55] rounded-2xl min-w-[190px] max-w-[290px] min-h-[12px]",
				})}
			>
				<div
					className="bg-[#00FF55] rounded-2xl"
					style={{ width: `${calculationOfStats(base_stat)}%` }}
				/>
			</div>
		</div>
	);
};

export default ShowStat;
