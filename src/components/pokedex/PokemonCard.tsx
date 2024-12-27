import PokemonType from "@components/PokemonType";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";

const PokemonCard = () => {
	return (
		<div
			className={tvFlexContainer({
				direction: "column",
				align: "center",
				justify: "center",
				width: "fit",
				height: "fit",
				class: "bg-gray-400 gap-4 rounded-3xl",
			})}
		>
			<figure className="w-full">
				<img
					className="max-w-64 filter saturate-200"
					src="greninja-hero.png"
					alt="greninja"
				/>
			</figure>
			<h5
				className={tvText({
					color: "white",
					align: "center",
					weight: "normal",
					class: "text-3xl",
				})}
			>
				Pikachu
			</h5>
			<div
				className={tvFlexContainer({
					direction: "row",
					align: "center",
					justify: "center",
					class: "gap-2",
				})}
			>
				<PokemonType type="water" />
				<PokemonType type="dark" />
			</div>
			<h5
				className={tvText({
					color: "white",
					align: "center",
					weight: "normal",
					class: "text-2xl",
				})}
			>
				#009
			</h5>
		</div>
	);
};

export default PokemonCard;
