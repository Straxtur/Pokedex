import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pokemon/builder')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pokemon/builder"!</div>
}
