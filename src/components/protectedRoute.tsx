"use client";

import { useEffect } from "react";
// import { useRouter } from "next/navigation"; for Next.js
import { useAuth } from "./AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  // const router = useRouter();  // for Next.js, use this to navigate

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // router.push("/"); //for Next.js, redirect to home or login page
    }
  }, [isAuthenticated, isLoading]);

  // [isAuthenticated, isLoading, router] when using Next.js

  // if (isLoading) return <h1>Loading...</h1>;

  return !isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
