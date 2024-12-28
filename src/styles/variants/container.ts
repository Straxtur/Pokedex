import { tv } from "tailwind-variants";

export const tvFlexContainer = tv(
	{
		base: "flex",
		variants: {
			width: {
				fill: "w-full",
				fit: "w-fit",
				screen: "w-screen",
			},
			height: {
				fill: "h-full",
				fit: "h-fit",
				screen: "h-screen",
			},
			direction: {
				row: "flex-row",
				column: "flex-col",
			},
			justify: {
				start: "justify-start",
				center: "justify-center",
			},
			align: {
				center: "items-center",
				start: "items-start",
			},
			order: {
				o1: "order-1",
				o2: "order-2",
			},
		},
	},
	{
		responsiveVariants: ["sm", "md", "lg"],
	},
);

export const tvBackgroundPokemon = tv({
	base: "bg-gradient-to-b bg-cover bg-no-repeat filter saturate-150",
	variants: {
		type: {
			fire: "from-[#060E20] to-fire",
			water: "from-[#060E20] to-water",
			grass: "from-[#060E20] to-grass",
			electric: "from-[#060E20] to-electric",
			psychic: "from-[#060E20] to-psychic",
			ice: "from-[#060E20] to-ice",
			dragon: "from-[#060E20] to-dragon",
			dark: "from-[#060E20] to-dark",
			fairy: "from-[#060E20] to-fairy",
			normal: "from-[#060E20] to-normal",
			fighting: "from-[#060E20] to-fighting",
			poison: "from-[#060E20] to-poison",
			ground: "from-[#060E20] to-ground",
			rock: "from-[#060E20] to-rock",
			bug: "from-[#060E20] to-bug",
			ghost: "from-[#060E20] to-ghost",
			steel: "from-[#060E20] to-steel",
		},
	},
});
