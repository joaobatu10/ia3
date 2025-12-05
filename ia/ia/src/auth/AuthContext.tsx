// src/auth/AuthContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Auth = { user: { name: string; email: string } | null; token: string | null };
type LoginInput = { email: string; senha: string };

type AuthContextType = Auth & {
  isAuthenticated: boolean;
  login: (data: LoginInput) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<Auth>(() => {
    const saved = localStorage.getItem("auth");
    return saved ? JSON.parse(saved) : { user: null, token: null };
  });

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  const login = async ({ email }: LoginInput) => {
    // TODO: aqui você chama sua API real
    setAuth({ user: { name: "Usuário", email }, token: "token-abc" });
  };

  const logout = () => setAuth({ user: null, token: null });

  return (
    <AuthContext.Provider
      value={{
        ...auth,
        isAuthenticated: !!auth.token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return ctx;
}
