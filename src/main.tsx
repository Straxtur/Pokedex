import "@/index.css";
import App from "@pages/App.tsx";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(<App />);
}
