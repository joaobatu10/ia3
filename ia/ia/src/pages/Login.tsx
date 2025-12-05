// src/pages/Login.tsx
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import "../login.css";

type Errors = Partial<Record<"nome" | "email" | "senha", string>>;

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    lembrar: false,
  });
  const [errors, setErrors] = useState<Errors>({});

  // Aplica a classe no body quando o componente monta
  useEffect(() => {
    document.body.className = 'login-page';
    return () => {
      document.body.className = ''; // Limpa ao desmontar
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors: Errors = {};

    if (!formData.email) newErrors.email = "Email é obrigatório";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email inválido";

    if (!formData.senha) newErrors.senha = "Senha é obrigatória";
    else if (formData.senha.length < 6)
      newErrors.senha = "Senha deve ter pelo menos 6 caracteres";

    if (!isLogin && !formData.nome)
      newErrors.nome = "Nome é obrigatório";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Dados do formulário:", formData);
      alert(isLogin ? "Login realizado com sucesso!" : "Cadastro realizado com sucesso!");
    }
  };

  const toggleFormMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
  };

  return (
    <div className="app login-layout">
      <div className="login-page">
        <div className="fade-overlay"></div>
        <div className="login-container">
          <div className="login-card">
          <div className="login-header">
            <img
              src="/images/full-fade-logo.png"
              alt="Logo da escola"
              className="login-logo"
            />
            <h1>{isLogin ? "Login" : "Criar Conta"}</h1>
            <p>{isLogin ? "Acesse sua conta para continuar" : "Crie sua conta para começar"}</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="nome">Nome Completo</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className={errors.nome ? "error" : ""}
                  placeholder="Digite seu nome completo"
                />
                {errors.nome && <span className="error-message">{errors.nome}</span>}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                placeholder="seu@email.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                className={errors.senha ? "error" : ""}
                placeholder="Digite sua senha"
              />
              {errors.senha && <span className="error-message">{errors.senha}</span>}
            </div>

            {isLogin && (
              <div className="form-options">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="lembrar"
                    checked={formData.lembrar}
                    onChange={handleChange}
                  />
                  <span className="checkmark"></span>
                  Lembrar-me
                </label>
                <a href="#recuperar" className="forgot-password">
                  Esqueci minha senha
                </a>
              </div>
            )}

            <button type="submit" className="login-button">
              {isLogin ? "Entrar" : "Criar Conta"}
            </button>
          </form>

          <div className="login-footer">
            <p>
              {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}
              <button type="button" className="toggle-form" onClick={toggleFormMode}>
                {isLogin ? " Criar conta" : " Fazer login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
