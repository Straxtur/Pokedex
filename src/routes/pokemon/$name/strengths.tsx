import Index from "@pages/pokemon/Index";
import Strengths from "@pages/pokemon/Strengths";
import { createFileRoute, useMatch } from "@tanstack/react-router";

export const Route = createFileRoute("/pokemon/$name/strengths")({
	component: RouteComponent,
});

function RouteComponent() {
	const { name } = Route.useParams();
	const strengthsRoute = useMatch({ from: "/pokemon/$name/strengths" });

	return (
		<Index pokeName={name} strengthsRoute={strengthsRoute.id}>
			<Strengths />
		</Index>
	);
}
