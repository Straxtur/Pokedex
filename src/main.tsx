import "@/index.css";
import App from "@pages/App.tsx";
import { LazyMotion, domAnimation } from "motion/react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<LazyMotion features={domAnimation}>
			<App />
		</LazyMotion>,
	);
}
