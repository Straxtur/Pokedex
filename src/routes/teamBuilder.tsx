import TeamBuilder from "@pages/builder/TeamBuilder";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/teamBuilder")({
	component: RouteComponent,
});

function RouteComponent() {
	return <TeamBuilder />;
}
