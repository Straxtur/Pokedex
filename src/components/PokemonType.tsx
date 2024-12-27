import type { Types } from "@/types/pokemonTypes";
import { types } from "@/utils/typesPokemon";
import { tvTypeContainer } from "@styles/variants/pokemonType";
import { tvText } from "@styles/variants/text";

interface pokemonTypePops {
	type: Types;
}

const PokemonType: React.FC<pokemonTypePops> = ({ type }) => {
	const IconComponent = types.find((t) => t.name.toLowerCase() === type);

	return (
		<div
			className={tvTypeContainer({
				bg: type,
			})}
		>
			{IconComponent?.icon ? <IconComponent.icon size="20" /> : ""}
			<p
				className={tvText({
					color: "white",
					weight: "small",
					size: "buttonText",
				})}
			>
				{type}
			</p>
		</div>
	);
};

export default PokemonType;
