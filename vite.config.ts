import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { defineConfig } from "vite";
import envCompatible from "vite-plugin-env-compatible";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), envCompatible()],
	resolve: {
		alias: {
			"@components": path.resolve(__dirname, "src/components"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@api": path.resolve(__dirname, "src/api"),
			"@": path.resolve(__dirname, "src"),
		},
	},
});
