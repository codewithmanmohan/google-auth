/**
 * THis page is accesible for the authenticated user!
 */
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function Dashboard() {
  const { logout, user, isAuthenticated } = useAuth0();
  return (
    <div>
      Dashboard Page
      {isAuthenticated && (
        <>
          <h2>Welcome, {user.name}</h2>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}
