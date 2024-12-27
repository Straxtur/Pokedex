import { tv } from "tailwind-variants";

export const tvTypeContainer = tv({
	base: "flex flex-row justify-center items-center w-fit h-fit gap-4 px-3 py-1 rounded-md uppercase",
	variants: {
		bg: {
			fire: "bg-fire",
			water: "bg-water",
			grass: "bg-grass",
			bug: "bg-bug",
			dark: "bg-dark",
			dragon: "bg-dragon",
			electric: "bg-electric",
			fairy: "bg-fairy",
			fighting: "bg-fighting",
			flying: "bg-flying",
			ghost: "bg-ghost",
			ground: "bg-ground",
			ice: "bg-ice",
			normal: "bg-normal",
			poison: "bg-poison",
			psychic: "bg-psychic",
			rock: "bg-rock",
			steel: "bg-steel",
		},
	},
});
