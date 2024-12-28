import "@/index.css";
import queryClient from "@api/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { LazyMotion, domAnimation } from "motion/react";
import { createRoot } from "react-dom/client";
import { routeTree } from "./routeTree.gen";

// Import the generated route tree
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<LazyMotion features={domAnimation}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</LazyMotion>,
	);
}
