import type React from "react";
import { useEffect } from "react";

interface AuthRouteProps {
  children: React.ReactNode;
}

export const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const isAuthenticated = true;
  const isLoading = false;
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      // Redirect to home or dashboard if authenticated
      window.location.href = "/"; //This should be replaced with useNavigate from react-router-dom
    }
  }, [isAuthenticated, isLoading]);

  //This should be a loading spinner or similar
  if (isLoading) return <h1>Loading...</h1>;

  return !isAuthenticated ? <>{children}</> : null;
};
