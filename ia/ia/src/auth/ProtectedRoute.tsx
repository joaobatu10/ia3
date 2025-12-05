// src/auth/ProtectedRoute.tsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const MANUTENCAO = true; // <<< troque para false quando liberar

export default function ProtectedRoute() {
  const { user } = useAuth();
  const location = useLocation();

  if (MANUTENCAO) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
