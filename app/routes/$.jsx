import { redirect } from '@remix-run/node';

// Splat routes
export function loader({ params }) {
  if (params['*'] === 'exp') {
    return redirect('/expenses');
  }

  throw new Response('Not found', { status: 404 });
}
