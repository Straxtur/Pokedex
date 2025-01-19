/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as IndexImport } from "./routes/index";
import { Route as PokemonNameAttacksImport } from "./routes/pokemon/$name/attacks";
import { Route as PokemonNameStrengthsImport } from "./routes/pokemon/$name/strengths";

import { Route as PokemonNameStatsImport } from "./routes/pokemon/$name/stats";
import { Route as PokemonNameWeaknessesImport } from "./routes/pokemon/$name/weaknesses";
import { Route as PokemonIndexImport } from "./routes/pokemon/index";
import { Route as PokemonTeamBuilderImport } from "./routes/teamBuilder";

// Create/Update Routes

const IndexRoute = IndexImport.update({
	id: "/",
	path: "/",
	getParentRoute: () => rootRoute,
} as any);

const PokemonIndexRoute = PokemonIndexImport.update({
	id: "/pokemon/",
	path: "/pokemon/",
	getParentRoute: () => rootRoute,
} as any);

const PokemonTeamBuilderRoute = PokemonTeamBuilderImport.update({
	id: "/teamBuilder",
	path: "/teamBuilder",
	getParentRoute: () => rootRoute,
} as any);

const PokemonNameStatsRoute = PokemonNameStatsImport.update({
	id: "/pokemon/$name/stats",
	path: "/pokemon/$name/stats",
	getParentRoute: () => rootRoute,
} as any);

const PokemonNameAttacksRoute = PokemonNameAttacksImport.update({
	id: "/pokemon/$name/attacks",
	path: "/pokemon/$name/attacks",
	getParentRoute: () => rootRoute,
} as any);

const PokemonNameWeaknessesRoute = PokemonNameWeaknessesImport.update({
	id: "/pokemon/$name/weaknesses",
	path: "/pokemon/$name/weaknesses",
	getParentRoute: () => rootRoute,
} as any);

const PokemonNameStrengthsRoute = PokemonNameStrengthsImport.update({
	id: "/pokemon/$name/strengths",
	path: "/pokemon/$name/strengths",
	getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
	interface FileRoutesByPath {
		"/": {
			id: "/";
			path: "/";
			fullPath: "/";
			preLoaderRoute: typeof IndexImport;
			parentRoute: typeof rootRoute;
		};
		"/teamBuilder": {
			id: "/teamBuilder";
			path: "/teamBuilder";
			fullPath: "/teamBuilder";
			preLoaderRoute: typeof PokemonTeamBuilderImport;
			parentRoute: typeof rootRoute;
		};
		"/pokemon/": {
			id: "/pokemon/";
			path: "/pokemon";
			fullPath: "/pokemon";
			preLoaderRoute: typeof PokemonIndexImport;
			parentRoute: typeof rootRoute;
		};
		"/pokemon/$name/weaknesses": {
			id: "/pokemon/$name/weaknesses";
			path: "/pokemon/$name/weaknesses";
			fullPath: "/pokemon/$name/weaknesses";
			preLoaderRoute: typeof PokemonNameWeaknessesImport;
			parentRoute: typeof rootRoute;
		};
		"/pokemon/$name/strengths": {
			id: "/pokemon/$name/strengths";
			path: "/pokemon/$name/strengths";
			fullPath: "/pokemon/$name/strengths";
			preLoaderRoute: typeof PokemonNameStrengthsImport;
			parentRoute: typeof rootRoute;
		};
		"/pokemon/$name/attacks": {
			id: "/pokemon/$name/attacks";
			path: "/pokemon/$name/attacks";
			fullPath: "/pokemon/$name/attacks";
			preLoaderRoute: typeof PokemonNameAttacksImport;
			parentRoute: typeof rootRoute;
		};
		"/pokemon/$name/stats": {
			id: "/pokemon/$name/stats";
			path: "/pokemon/$name/stats";
			fullPath: "/pokemon/$name/stats";
			preLoaderRoute: typeof PokemonNameStatsImport;
			parentRoute: typeof rootRoute;
		};
	}
}

// Create and export the route tree

export interface FileRoutesByFullPath {
	"/": typeof IndexRoute;
	"/teamBuilder": typeof PokemonTeamBuilderRoute;
	"/pokemon": typeof PokemonIndexRoute;
	"/pokemon/$name/weaknesses": typeof PokemonNameWeaknessesRoute;
	"/pokemon/$name/strengths": typeof PokemonNameStrengthsRoute;
	"/pokemon/$name/attacks": typeof PokemonNameAttacksRoute;
	"/pokemon/$name/stats": typeof PokemonNameStatsRoute;
}

export interface FileRoutesByTo {
	"/": typeof IndexRoute;
	"/teamBuilder": typeof PokemonTeamBuilderRoute;
	"/pokemon": typeof PokemonIndexRoute;
	"/pokemon/$name/weaknesses": typeof PokemonNameWeaknessesRoute;
	"/pokemon/$name/strengths": typeof PokemonNameStrengthsRoute;
	"/pokemon/$name/attacks": typeof PokemonNameAttacksRoute;
	"/pokemon/$name/stats": typeof PokemonNameStatsRoute;
}

export interface FileRoutesById {
	__root__: typeof rootRoute;
	"/": typeof IndexRoute;
	"/teamBuilder": typeof PokemonTeamBuilderRoute;
	"/pokemon/": typeof PokemonIndexRoute;
	"/pokemon/$name/weaknesses": typeof PokemonNameWeaknessesRoute;
	"/pokemon/$name/strengths": typeof PokemonNameStrengthsRoute;
	"/pokemon/$name/attacks": typeof PokemonNameAttacksRoute;
	"/pokemon/$name/stats": typeof PokemonNameStatsRoute;
}

export interface FileRouteTypes {
	fileRoutesByFullPath: FileRoutesByFullPath;
	fullPaths:
		| "/"
		| "/teamBuilder"
		| "/pokemon"
		| "/pokemon/$name/weaknesses"
		| "/pokemon/$name/strengths"
		| "/pokemon/$name/attacks"
		| "/pokemon/$name/stats";
	fileRoutesByTo: FileRoutesByTo;
	to:
		| "/"
		| "/teamBuilder"
		| "/pokemon"
		| "/pokemon/$name/weaknesses"
		| "/pokemon/$name/strengths"
		| "/pokemon/$name/attacks"
		| "/pokemon/$name/stats";
	id:
		| "__root__"
		| "/"
		| "/teamBuilder"
		| "/pokemon/"
		| "/pokemon/$name/weaknesses"
		| "/pokemon/$name/strengths"
		| "/pokemon/$name/attacks"
		| "/pokemon/$name/stats";
	fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
	IndexRoute: typeof IndexRoute;
	PokemonTeamBuilderRoute: typeof PokemonTeamBuilderRoute;
	PokemonIndexRoute: typeof PokemonIndexRoute;
	PokemonNameWeaknessesRoute: typeof PokemonNameWeaknessesRoute;
	PokemonNameStrengthsRoute: typeof PokemonNameStrengthsRoute;
	PokemonNameAttacksRoute: typeof PokemonNameAttacksRoute;
	PokemonNameStatsRoute: typeof PokemonNameStatsRoute;
}

const rootRouteChildren: RootRouteChildren = {
	IndexRoute: IndexRoute,
	PokemonTeamBuilderRoute: PokemonTeamBuilderRoute,
	PokemonIndexRoute: PokemonIndexRoute,
	PokemonNameWeaknessesRoute: PokemonNameWeaknessesRoute,
	PokemonNameStrengthsRoute: PokemonNameStrengthsRoute,
	PokemonNameAttacksRoute: PokemonNameAttacksRoute,
	PokemonNameStatsRoute: PokemonNameStatsRoute,
};

export const routeTree = rootRoute
	._addFileChildren(rootRouteChildren)
	._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/pokemon/builder",
        "/pokemon/",
        "/pokemon/$name/weaknesses",
        "/pokemon/$name/attacks",
        "/pokemon/$name/stats"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/pokemon/builder": {
      "filePath": "pokemon/builder.tsx"
    },
    "/pokemon/": {
      "filePath": "pokemon/index.tsx"
    },
    "/pokemon/$name/weaknesses": {
      "filePath": "pokemon/$name/weaknesses.tsx"
    },
    "/pokemon/$name/attacks": {
      "filePath": "pokemon/$name/attacks.tsx"
    },
    "/pokemon/$name/stats": {
      "filePath": "pokemon/$name/stats.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
