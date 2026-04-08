import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { authService, UserProfile } from "./authService";

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = () => {
      if (authService.isAuthenticated()) {
        authService.getMe()
          .then(me => setUser(me))
          .catch(() => authService.logout())
          .finally(() => setIsLoading(false));
      } else {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = (username: string, password: string) => {
    return authService.login({ username, password })
      .then(() => authService.getMe())
      .then(me => setUser(me));
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
