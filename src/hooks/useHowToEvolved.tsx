import type { EvolutionDetail } from "@/types/pokemonEvolutionLine";
import { BasicContainer } from "@components/Containers";
import { ArrowRightIcon } from "@components/Icons";
import { tvText } from "@styles/variants/text";

export const useHowToEvolved = (evoDetail: EvolutionDetail) => {
	if (evoDetail.item) {
		const itemDetail = {
			name: evoDetail.item.name,
			img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${evoDetail.item.name}.png`,
		};

		return (
			<BasicContainer direction="column" clss="px-5">
				<img
					width="30px"
					src={itemDetail.img}
					alt={itemDetail.name}
					draggable="false"
				/>
				<span
					className={tvText({
						size: "bigText",
					})}
				>
					{itemDetail.name}
				</span>
			</BasicContainer>
		);
	}
	if (evoDetail.min_happiness) {
		const happiness = evoDetail.min_happiness;
		const timeOfDay = evoDetail.time_of_day;

		return (
			<BasicContainer clss="px-5">
				<span
					className={tvText({
						size: "buttonText",
						class: "uppercase",
					})}
				>
					Happiness {happiness} {timeOfDay}
				</span>
			</BasicContainer>
		);
	}

	if (evoDetail.min_level) {
		const level = evoDetail.min_level;

		return (
			<BasicContainer clss="px-5">
				<ArrowRightIcon size="20" color="white" />
				<span
					className={tvText({
						size: "bigText",
					})}
				>
					{level}
				</span>
			</BasicContainer>
		);
	}
};
