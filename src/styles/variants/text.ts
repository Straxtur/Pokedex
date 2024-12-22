import { tv } from "tailwind-variants";

export const tvText = tv({
	base: "font-pokemon",
	variants: {
		color: {
			white: "text-white",
			black: "text-black",
		},
		size: {
			h1: "text-5xl",
			bigText: "text-xl",
			buttonText: "text-base",
		},
		weight: {
			small: "font-light",
			normal: "font-normal",
			bold: "font-medium",
		},
		align: {
			center: "text-center",
		},
		leading: {
			normal: "leading-normal",
			loose: "leading-loose",
			tight: "leading-tight",
			ten: "leading-10",
		},
	},
});
