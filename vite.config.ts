import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { defineConfig } from "vite";
// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": path.resolve(__dirname, "src/components"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@": path.resolve(__dirname, "src"),
		},
	},
});
