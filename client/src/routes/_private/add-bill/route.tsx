import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_private/add-bill')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_private/add-bill"!</div>;
}