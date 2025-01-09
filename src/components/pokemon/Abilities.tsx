import type { PokemonResponse } from "@/types/pokemonDetails";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import RenderAbility from "./RenderAbility";

interface AbilitiesSplashProps {
	pokemon: PokemonResponse | undefined;
}

const Abilities: React.FC<AbilitiesSplashProps> = ({ pokemon }) => {
	return (
		<section
			className={tvFlexContainer({
				direction: "column",
				align: "start",
				justify: "center",
				width: "fill",
				class: "p-5 gap-3 bg-secondary-100 lg:my-3 rounded-xl",
			})}
		>
			<h2
				className={tvText({
					color: "white",
					size: "bigText",
					weight: "bold",
				})}
			>
				Abilities
			</h2>
			<RenderAbility ability={pokemon?.abilities} />
		</section>
	);
};

export default Abilities;
