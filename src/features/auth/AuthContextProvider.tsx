import { useState, type ReactNode } from "react";

import { AuthContext } from "./AuthContext";
import type { AuthContextValue, User } from "./auth.types";
import { getStoredUser, saveStoredUser, removeStoredUser } from "./authStorage";

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    return getStoredUser();
  });

  const login = (email: string, password: string): boolean => {
    if (!email || !password) {
      return false;
    }

    const loggedInUser: User = {
      email,
      name: "Titus Luoyang",
    };

    saveStoredUser(loggedInUser);
    setUser(loggedInUser);

    return true;
  };

  const logout = () => {
    console.log("LOGOUT CALLED");

    removeStoredUser();
    setUser(null);
  };

  const value: AuthContextValue = {
    user,
    isAuthenticated: user !== null,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
