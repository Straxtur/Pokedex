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
				fire: "#FF6633",
				water: "#3399FF",
				grass: "#66CC33",
				electric: "#FFCC33",
				psychic: "#FF6699",
				ice: "#99FFFF",
				dragon: "#7038F8",
				dark: "#333333",
				fairy: "#FF99CC",
				normal: "#FFCC99",
				fighting: "#FF3333",
				flying: "#6699FF",
				posion: "#AA66CC",
				ground: "#FFCC66",
				rock: "#CC9966",
				bug: "#99CC33",
				ghost: "#6666CC",
				steel: "#CCCCCC",
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
