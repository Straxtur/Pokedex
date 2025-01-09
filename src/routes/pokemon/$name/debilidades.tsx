import Index from "@pages/pokemon/Index";
import { Link, createFileRoute, useMatch } from "@tanstack/react-router";

export const Route = createFileRoute("/pokemon/$name/debilidades")({
	component: RouteComponent,
});

function RouteComponent() {
	const { name } = Route.useParams();
	const weaknessesRoute = useMatch({ from: "/pokemon/$name/debilidades" });

	return (
		<Index pokeName={name} weaknessesRoute={weaknessesRoute.id}>
			<div>soy los debilidades</div>
			<br />
			<Link params={{ name: name }} to="/pokemon/$name/movimientos">
				movs
			</Link>
			<br />
			<Link params={{ name: name }} to="/pokemon/$name/stats">
				stats
			</Link>
		</Index>
	);
}
