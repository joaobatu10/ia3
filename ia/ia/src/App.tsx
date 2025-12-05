// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Comercial from "./pages/Comercial";
import Financeiro from "./pages/Financeiro"; // ✅ novo import

export default function App() {
  const CHAT_HABILITADO = true;

  return (
    <BrowserRouter>
      <Routes>
        {/* 🌐 Páginas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/comercial" element={<Comercial />} />
        <Route path="/financeiro" element={<Financeiro />} /> {/* ✅ nova rota */}

        {/* 💬 Chat */}
        {CHAT_HABILITADO && <Route path="/chat" element={<Chat />} />}

        {/* 🔁 Redirecionamentos */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
