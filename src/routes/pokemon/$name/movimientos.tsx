import Index from "@pages/pokemon/Index";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pokemon/$name/movimientos")({
	component: RouteComponent,
});

function RouteComponent() {
	const { name } = Route.useParams();

	return (
		<Index pokeName={name}>
			<div>soy los movs</div>
			<br />
			<Link params={{ name: name }} to="/pokemon/$name/stats">
				stats
			</Link>
			<br />
			<Link params={{ name: name }} to="/pokemon/$name/debilidades">
				debilidades
			</Link>
		</Index>
	);
}
