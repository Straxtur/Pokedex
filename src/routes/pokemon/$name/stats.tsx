import Index from "@pages/pokemon/Index";
import Stats from "@pages/pokemon/Stats";
import { createFileRoute, useMatch } from "@tanstack/react-router";

export const Route = createFileRoute("/pokemon/$name/stats")({
	component: RouteComponent,
});

function RouteComponent() {
	const { name } = Route.useParams();
	const statsRoute = useMatch({ from: "/pokemon/$name/stats" });

	return (
		<Index pokeName={name} statsRoute={statsRoute.id}>
			<Stats />
		</Index>
	);
}
