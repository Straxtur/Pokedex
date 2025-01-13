import Attacks from "@pages/pokemon/Attacks";
import Index from "@pages/pokemon/Index";
import { createFileRoute, useMatch } from "@tanstack/react-router";

export const Route = createFileRoute("/pokemon/$name/movimientos")({
	component: RouteComponent,
});

function RouteComponent() {
	const { name } = Route.useParams();
	const movesRoute = useMatch({ from: "/pokemon/$name/movimientos" });

	return (
		<Index pokeName={name} movesRoute={movesRoute.id}>
			<Attacks />
		</Index>
	);
}
