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
