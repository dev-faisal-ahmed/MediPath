import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_private/add-bill')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_private/add-bill"!</div>;
}