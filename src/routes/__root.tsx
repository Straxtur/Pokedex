import NotFound from "@components/NotFound";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: () => {
		return (
			<>
				<Outlet />
				{import.meta.env.MODE === "development" && <TanStackRouterDevtools />}
			</>
		);
	},
	notFoundComponent: NotFound,
});
