import Index from "@pages/pokemon/Index";
import { Link, createFileRoute, useMatch } from "@tanstack/react-router";

export const Route = createFileRoute("/pokemon/$name/stats")({
	component: RouteComponent,
});

function RouteComponent() {
	const { name } = Route.useParams();
	const statsRoute = useMatch({ from: "/pokemon/$name/stats" });

	return (
		<Index pokeName={name} statsRoute={statsRoute.id}>
			<div>soy los stats</div>
			<Link params={{ name: name }} to="/pokemon/$name/movimientos">
				movs
			</Link>
			<br />
			<Link params={{ name: name }} to="/pokemon/$name/debilidades">
				debilidades
			</Link>
		</Index>
	);
}
