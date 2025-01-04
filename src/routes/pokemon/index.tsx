import { CurrentPageProvider } from "@/context/context";
import Pokedex from "@pages/Pokedex";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pokemon/")({
	component: () => (
		<CurrentPageProvider>
			<Pokedex />
		</CurrentPageProvider>
	),
});
