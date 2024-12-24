import { tv } from "tailwind-variants";

export const tvFlexContainer = tv({
	base: "flex",
	variants: {
		width: {
			fill: "w-full",
			fit: "w-fit",
		},
		height: {
			fill: "h-full",
			fit: "h-fit",
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
	},
});
