import App from "@pages/App.tsx";
import "@styles/index.css";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(<App />);
}
