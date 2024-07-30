'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if(!user) return <a href="/api/auth/login">Login</a>;

  return (
    <div>
      <h1>Hello</h1>
      <div>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
    </div>
  );
}
