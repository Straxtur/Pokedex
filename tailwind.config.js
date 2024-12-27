import { withTV } from "tailwind-variants/dist/transformer.js";

/** @type {import('tailwindcss').Config} */
export default withTV({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				secondary: {
					100: "#24263A",
					200: "#14142B",
				},
				fire: "#FF9C54",
				water: "#4D90D5",
				grass: "#63BB5B",
				electric: "#F3D23B",
				psychic: "#F97176",
				ice: "#74CEC0",
				dragon: "#096DC4",
				dark: "#5A5366",
				fairy: "#EC8FE6",
				normal: "#FFCC99",
				fighting: "#CE4069",
				flying: "#92AADE",
				poison: "#AB6AC8",
				ground: "#C7B78B",
				rock: "#CC9966",
				bug: "#90C12C",
				ghost: "#5269AC",
				steel: "#9099A1",
			},
			fontFamily: {
				pokemon: ["Kalam", "cursive"],
			},
			fontWeight: {
				light: 300,
				normal: 400,
				medium: 700,
			},
		},
	},
	plugins: [],
});
