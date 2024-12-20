import { withTV } from "tailwind-variants/dist/transformer.js";

/** @type {import('tailwindcss').Config} */
export default withTV({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
});
