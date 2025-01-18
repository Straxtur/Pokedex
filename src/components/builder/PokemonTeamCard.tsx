import PokemonType from "@components/PokemonType";
import {
	tvBackgroundPokemon,
	tvFlexContainer,
} from "@styles/variants/container";
import { tvText } from "@styles/variants/text";

const PokemonTeamCard = () => {
	return (
		<div
			className={`${tvFlexContainer({
				direction: "column",
				justify: "start",
				align: "center",
				height: "fit",
				width: "fit",
				class: "gap-7 pt-4 pb-5 rounded-t-3xl",
			})} ${tvBackgroundPokemon({
				type: "water",
			})}`}
		>
			<figure
				className={`bg-red-200 rounded-full p-3 w-fit ${tvBackgroundPokemon({
					type: "water",
				})}`}
			>
				<img
					className="filter saturate-200"
					width="120px"
					src="greninja-hero.png"
					alt="greninja"
				/>
			</figure>

			<div className="flex flex-col items-center justify-center w-fit h-fit">
				<h3
					className={tvText({
						color: "white",
						align: "center",
						weight: "normal",
						class: "text-3xl uppercase",
					})}
				>
					Greninja
				</h3>
				<div className="flex gap-4 p-2 w-fit h-fit">
					<PokemonType type="water" />
					<PokemonType type="dark" />
				</div>
			</div>
		</div>
	);
};

export default PokemonTeamCard;
