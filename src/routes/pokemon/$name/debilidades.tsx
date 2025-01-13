import Index from "@pages/pokemon/Index";
import Weaknesses from "@pages/pokemon/weaknesses";
import { createFileRoute, useMatch } from "@tanstack/react-router";

export const Route = createFileRoute("/pokemon/$name/debilidades")({
	component: RouteComponent,
});

function RouteComponent() {
	const { name } = Route.useParams();
	const weaknessesRoute = useMatch({ from: "/pokemon/$name/debilidades" });

	return (
		<Index pokeName={name} weaknessesRoute={weaknessesRoute.id}>
			<Weaknesses />
		</Index>
	);
}
