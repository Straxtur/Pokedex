import { types } from "@/utils/typesPokemon";

export const useRenderType = (type: string) => {
	const pokemonType = types.find((t) => t.name.toLowerCase() === type);

	if (pokemonType) {
		return <pokemonType.icon size="25" />;
	}
};
