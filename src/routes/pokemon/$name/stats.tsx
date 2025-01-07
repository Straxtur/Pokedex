import Index from "@components/pokemon/Index";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pokemon/$name/stats")({
	component: RouteComponent,
});

function RouteComponent() {
	const { name } = Route.useParams();

	return (
		<Index pokeName={name}>
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
