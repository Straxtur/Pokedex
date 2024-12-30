import { tv } from "tailwind-variants";

export const tvButton = tv({
	base: "font-light font-pokemon w-fit h-fit text-buttonText rounded-3xl",
	variants: {
		border: {
			white: "border-2 border-white",
		},
		textColor: {
			white: "text-white",
			black: "text-black",
		},
		padding: {
			default: "px-5 py-3",
			none: "p-0",
		},
	},
});
