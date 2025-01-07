import type { Ability } from "@/types/pokemonDetails";
import { capitalizeFirstLetter } from "@/utils/formatter";
import { StarIcon } from "@components/Icons";
import { tvFlexContainer } from "@styles/variants/container";

interface abilityProps {
	ability: Ability[] | undefined;
}

const RenderAbility: React.FC<abilityProps> = ({ ability }) => {
	return (
		<div
			className={tvFlexContainer({
				direction: "column",
				align: "start",
				justify: "center",
				width: "fit",
				height: "fill",
				class: "gap-4",
			})}
		>
			{ability?.map((ab) => (
				<div
					key={ab.ability.name}
					className={tvFlexContainer({
						direction: "row",
						align: "center",
						justify: "center",
						width: "fit",
						height: "fit",
						class: "gap-3",
					})}
				>
					<StarIcon color={ab.is_hidden ? "#7038F8" : "#FFCC33"} size="24" />
					<p>
						{ab.is_hidden ? "Hidden: " : "Normal: "}
						{capitalizeFirstLetter(ab.ability.name)}
					</p>
				</div>
			))}
		</div>
	);
};

export default RenderAbility;
