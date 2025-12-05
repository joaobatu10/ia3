
# IA — Interface de Administração

Descrição resumida
-------------------

Aplicação front-end desenvolvida em React com Tailwind CSS. A interface inclui módulos para Chat, Comercial, Financeiro e autenticação. O código-fonte do projeto está localizado na pasta `ia/ia` dentro deste repositório.

Descrição do módulo
-------------------

Este repositório contém a interface do usuário (front-end) do projeto "IA". O módulo principal oferece:

- Sistema de chat para comunicação interna
- Páginas voltadas para área Comercial e Financeiro com dashboards e gráficos
- Fluxo de login e rotas protegidas
- Biblioteca de componentes reutilizáveis (botões, inputs, cards, etc.)

Tecnologias utilizadas
----------------------

- React 19
- Tailwind CSS
- React Router
- Axios (requisições HTTP)
- Recharts (gráficos)
- Radix UI (componentes acessíveis)
- TypeScript (tipagem) — parte do projeto

Pré-requisitos
---------------

- Node.js (recomenda-se v18 ou superior)
- npm (ou yarn)

Instalação e execução (passo a passo)
-----------------------------------

1. Clone o repositório (ou certifique-se de já ter o diretório local):

```powershell
git clone https://github.com/joaobatu10/ia3.git
cd "C:\Users\cador\OneDrive\Documentos\Visual Studio 2022\ia3"
```

2. Entre na pasta da aplicação (atenção: estrutura aninhada `ia/ia` neste repositório):

```powershell
cd ia\ia
```

3. Instale dependências:

```powershell
npm install
```

4. Rodar em modo de desenvolvimento:

```powershell
npm start
```

5. Gerar build de produção:

```powershell
npm run build
```

6. (Opcional) Observar e gerar CSS do Tailwind em desenvolvimento:

```powershell
npm run dev:tw
```

Principais funcionalidades
-------------------------

- Interface de Chat com histórico de mensagens
- Dashboard Comercial com gráficos e indicadores
- Dashboard Financeiro com relatórios e tabelas
- Sistema de autenticação (login e rotas protegidas)
- Conjunto de componentes reutilizáveis para acelerar desenvolvimento

Estrutura do projeto
--------------------

- `public/` — arquivos estáticos (index.html, manifest, imagens)
- `src/` — código-fonte (App, páginas, componentes, estilos)
- `src/components/` — componentes UI reutilizáveis
- `src/pages/` — páginas principais (Home, Chat, Comercial, Financeiro, Login)

Observações importantes
---------------------

- Este repositório originalmente continha uma pasta aninhada com um repositório interno. Já removemos o `.git` interno e os arquivos foram adicionados ao repositório principal.
- Se você for enviar o link ao professor, garanta que o repositório esteja público ou adicione o professor como colaborador via GitHub (Settings → Manage access).

Como compartilhar com o professor
-------------------------------

Opções rápidas:

- Tornar o repositório público (Settings → Change repository visibility → Make public) — qualquer pessoa com o link poderá acessar.
- Adicionar o professor como colaborador (Settings → Manage access → Invite collaborators) — acesso controlado.
- Criar um repositório sob sua própria conta e empurrar o código para lá (veja comandos abaixo):

```powershell
git remote set-url origin https://github.com/<seu-usuario>/<seu-repo>.git
git push -u origin master
```

Integrantes da equipe
---------------------

- Joao Vitor — cadorbatujoaovitor@gmail.com

Adicione abaixo os demais integrantes (nome e e-mail):

- Nome do Integrante 2 — email@exemplo.com
- Nome do Integrante 3 — email@exemplo.com

Contribuição
------------

1. Faça um fork ou clone do repositório.
2. Crie uma branch com a sua feature: `git checkout -b feature/nova-funcionalidade`.
3. Faça commits claros e pequenos.
4. Abra um Pull Request descrevendo as mudanças.

Licença
-------

Este projeto não possui licença definida. Adicione um arquivo `LICENSE` se quiser permitir uso público explícito.

Contato
-------

Joao Vitor — cadorbatujoaovitor@gmail.com

---

Se quiser, eu atualizo a seção "Integrantes da equipe" com os nomes reais — envie a lista e eu edito o README.