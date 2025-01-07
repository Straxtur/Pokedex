/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as PokemonIndexImport } from './routes/pokemon/index'
import { Route as PokemonBuilderImport } from './routes/pokemon/builder'
import { Route as PokemonNameStatsImport } from './routes/pokemon/$name/stats'
import { Route as PokemonNameMovimientosImport } from './routes/pokemon/$name/movimientos'
import { Route as PokemonNameDebilidadesImport } from './routes/pokemon/$name/debilidades'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PokemonIndexRoute = PokemonIndexImport.update({
  id: '/pokemon/',
  path: '/pokemon/',
  getParentRoute: () => rootRoute,
} as any)

const PokemonBuilderRoute = PokemonBuilderImport.update({
  id: '/pokemon/builder',
  path: '/pokemon/builder',
  getParentRoute: () => rootRoute,
} as any)

const PokemonNameStatsRoute = PokemonNameStatsImport.update({
  id: '/pokemon/$name/stats',
  path: '/pokemon/$name/stats',
  getParentRoute: () => rootRoute,
} as any)

const PokemonNameMovimientosRoute = PokemonNameMovimientosImport.update({
  id: '/pokemon/$name/movimientos',
  path: '/pokemon/$name/movimientos',
  getParentRoute: () => rootRoute,
} as any)

const PokemonNameDebilidadesRoute = PokemonNameDebilidadesImport.update({
  id: '/pokemon/$name/debilidades',
  path: '/pokemon/$name/debilidades',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/pokemon/builder': {
      id: '/pokemon/builder'
      path: '/pokemon/builder'
      fullPath: '/pokemon/builder'
      preLoaderRoute: typeof PokemonBuilderImport
      parentRoute: typeof rootRoute
    }
    '/pokemon/': {
      id: '/pokemon/'
      path: '/pokemon'
      fullPath: '/pokemon'
      preLoaderRoute: typeof PokemonIndexImport
      parentRoute: typeof rootRoute
    }
    '/pokemon/$name/debilidades': {
      id: '/pokemon/$name/debilidades'
      path: '/pokemon/$name/debilidades'
      fullPath: '/pokemon/$name/debilidades'
      preLoaderRoute: typeof PokemonNameDebilidadesImport
      parentRoute: typeof rootRoute
    }
    '/pokemon/$name/movimientos': {
      id: '/pokemon/$name/movimientos'
      path: '/pokemon/$name/movimientos'
      fullPath: '/pokemon/$name/movimientos'
      preLoaderRoute: typeof PokemonNameMovimientosImport
      parentRoute: typeof rootRoute
    }
    '/pokemon/$name/stats': {
      id: '/pokemon/$name/stats'
      path: '/pokemon/$name/stats'
      fullPath: '/pokemon/$name/stats'
      preLoaderRoute: typeof PokemonNameStatsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/pokemon/builder': typeof PokemonBuilderRoute
  '/pokemon': typeof PokemonIndexRoute
  '/pokemon/$name/debilidades': typeof PokemonNameDebilidadesRoute
  '/pokemon/$name/movimientos': typeof PokemonNameMovimientosRoute
  '/pokemon/$name/stats': typeof PokemonNameStatsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/pokemon/builder': typeof PokemonBuilderRoute
  '/pokemon': typeof PokemonIndexRoute
  '/pokemon/$name/debilidades': typeof PokemonNameDebilidadesRoute
  '/pokemon/$name/movimientos': typeof PokemonNameMovimientosRoute
  '/pokemon/$name/stats': typeof PokemonNameStatsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/pokemon/builder': typeof PokemonBuilderRoute
  '/pokemon/': typeof PokemonIndexRoute
  '/pokemon/$name/debilidades': typeof PokemonNameDebilidadesRoute
  '/pokemon/$name/movimientos': typeof PokemonNameMovimientosRoute
  '/pokemon/$name/stats': typeof PokemonNameStatsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/pokemon/builder'
    | '/pokemon'
    | '/pokemon/$name/debilidades'
    | '/pokemon/$name/movimientos'
    | '/pokemon/$name/stats'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/pokemon/builder'
    | '/pokemon'
    | '/pokemon/$name/debilidades'
    | '/pokemon/$name/movimientos'
    | '/pokemon/$name/stats'
  id:
    | '__root__'
    | '/'
    | '/pokemon/builder'
    | '/pokemon/'
    | '/pokemon/$name/debilidades'
    | '/pokemon/$name/movimientos'
    | '/pokemon/$name/stats'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PokemonBuilderRoute: typeof PokemonBuilderRoute
  PokemonIndexRoute: typeof PokemonIndexRoute
  PokemonNameDebilidadesRoute: typeof PokemonNameDebilidadesRoute
  PokemonNameMovimientosRoute: typeof PokemonNameMovimientosRoute
  PokemonNameStatsRoute: typeof PokemonNameStatsRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PokemonBuilderRoute: PokemonBuilderRoute,
  PokemonIndexRoute: PokemonIndexRoute,
  PokemonNameDebilidadesRoute: PokemonNameDebilidadesRoute,
  PokemonNameMovimientosRoute: PokemonNameMovimientosRoute,
  PokemonNameStatsRoute: PokemonNameStatsRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/pokemon/builder",
        "/pokemon/",
        "/pokemon/$name/debilidades",
        "/pokemon/$name/movimientos",
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
    "/pokemon/$name/debilidades": {
      "filePath": "pokemon/$name/debilidades.tsx"
    },
    "/pokemon/$name/movimientos": {
      "filePath": "pokemon/$name/movimientos.tsx"
    },
    "/pokemon/$name/stats": {
      "filePath": "pokemon/$name/stats.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
