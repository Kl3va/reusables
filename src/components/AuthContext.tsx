//Demo Setup to kickstart things off
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AuthState {
  user: null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthContextType extends AuthState {
  setUser: (user: AuthState | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<{
    user: null;
    isAuthenticated: boolean;
    isLoading: boolean;
  }>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  const setUser = (user: AuthState | null) => {
    setState({
      user: null,
      isAuthenticated: !!user,
      isLoading: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
