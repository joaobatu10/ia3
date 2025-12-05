// src/pages/Comercial.tsx
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import "../Comercial.css";

export default function CentralComercial() {
  const [periodo, setPeriodo] = useState("6m");

  const gerarDados = () => {
    const base = [
      { mes: "Jan", matriculas: 22, leads: 180, conversao: 30 },
      { mes: "Fev", matriculas: 27, leads: 190, conversao: 34 },
      { mes: "Mar", matriculas: 32, leads: 210, conversao: 35 },
      { mes: "Abr", matriculas: 28, leads: 200, conversao: 33 },
      { mes: "Mai", matriculas: 35, leads: 240, conversao: 38 },
      { mes: "Jun", matriculas: 30, leads: 230, conversao: 36 },
      { mes: "Jul", matriculas: 26, leads: 195, conversao: 32 },
      { mes: "Ago", matriculas: 33, leads: 210, conversao: 37 },
      { mes: "Set", matriculas: 29, leads: 205, conversao: 34 },
      { mes: "Out", matriculas: 31, leads: 220, conversao: 35 },
      { mes: "Nov", matriculas: 28, leads: 210, conversao: 33 },
      { mes: "Dez", matriculas: 25, leads: 190, conversao: 31 }
    ];

    if (periodo === "3m") return base.slice(-3);
    if (periodo === "6m") return base.slice(-6);
    return base;
  };

  const data = gerarDados();

  const pieData = [
    { name: "Mídia Paga", value: 45 },
    { name: "Indicações", value: 30 },
    { name: "Redes Sociais", value: 15 },
    { name: "Outros", value: 10 }
  ];

  const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ec4899"];

  return (
    <div className="central-container">
      {/* Cabeçalho */}
      <header className="central-header">
        <div className="header-left">
          <img src="/images/white-logo.png" alt="Infly" className="logo" />
          <h1>Central Comercial</h1>
        </div>
        <nav>
          <button className="btn-voltar" onClick={() => window.history.back()}>
            ⬅ Voltar
          </button>
        </nav>
      </header>

      {/* Conteúdo */}
      <main className="central-main">
        <section className="central-hero">
          <h2>📊 Painel Comercial - Infly English School</h2>
          <p>Visão geral de desempenho de matrículas e conversões</p>
        </section>

        {/* Seleção de Período */}
        <div className="periodo-container">
          <label htmlFor="periodo">Período do relatório:</label>
          <select
            id="periodo"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
          >
            <option value="1y">Último ano</option>
            <option value="6m">Últimos 6 meses</option>
            <option value="3m">Último trimestre</option>
          </select>
        </div>

        {/* Gráficos */}
        <div className="charts-grid">
          <div className="chart-card">
            <h3>📈 Matrículas e Leads</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="matriculas" stroke="#4f46e5" strokeWidth={3} />
                <Line type="monotone" dataKey="leads" stroke="#10b981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>💹 Taxa de Conversão (%)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="conversao" fill="#f59e0b" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>🎯 Origem dos Leads</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Botão de Relatório */}
        <section className="relatorio-section">
          <h3>📑 Gerar Relatório Geral</h3>
          <p>Selecione o período acima e clique para gerar o relatório consolidado.</p>
          <button
            className="btn-relatorio"
            onClick={() =>
              alert(`Relatório do período ${periodo.toUpperCase()} gerado com sucesso!`)
            }
          >
            📄 Gerar Relatório
          </button>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="central-footer">
        © {new Date().getFullYear()} Infly English School - Central Comercial
      </footer>
    </div>
  );
}
