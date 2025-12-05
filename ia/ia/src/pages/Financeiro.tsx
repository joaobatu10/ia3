// src/pages/Financeiro.tsx
"use client";

import React, { useState } from "react";
import "../Financeiro.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const receitaData = [
  { mes: "Jan", valor: 4000 },
  { mes: "Fev", valor: 3000 },
  { mes: "Mar", valor: 5000 },
  { mes: "Abr", valor: 4500 },
  { mes: "Mai", valor: 6000 },
];

const despesaData = [
  { mes: "Jan", valor: 2000 },
  { mes: "Fev", valor: 2500 },
  { mes: "Mar", valor: 3000 },
  { mes: "Abr", valor: 2800 },
  { mes: "Mai", valor: 3200 },
];

const saldoData = receitaData.map((r, i) => ({
  mes: r.mes,
  saldo: r.valor - despesaData[i].valor,
}));

const matriculasData = [
  { status: "Ativas", value: 120 },
  { status: "Inativas", value: 30 },
];

const COLORS = ["#005EFF", "#F59E0B"];

export default function Financeiro() {
  const [periodo, setPeriodo] = useState("2025");

  return (
    <div className="central-container">
      <header className="central-header">
        <div className="header-left">
          <img className="logo" src="/images/white-logo.png" alt="Logo" />
          <h2>Financeiro</h2>
        </div>
        <select
          value={periodo}
          onChange={(e) => setPeriodo(e.target.value)}
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </header>

      <main className="central-main">
        <div className="charts-grid">
          <div className="chart-card">
            <h3>Receitas Mensais</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={receitaData}>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="valor" stroke="#005EFF" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>Despesas Mensais</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={despesaData}>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="valor" fill="#F59E0B" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>Saldo Mensal</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={saldoData}>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="saldo" stroke="#10B981" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>Matriculas</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={matriculasData}
                  dataKey="value"
                  nameKey="status"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {matriculasData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>

      <footer className="central-footer">
        Escola de Inglês - Gestão Financeira
      </footer>
    </div>
  );
}
