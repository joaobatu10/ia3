import React from "react";
import ReactDOM from "react-dom/client";
// If you generate Tailwind output (src/tw.css) you can import it here instead of globals.css
import './tw.css';
// import './styles/globals.css'; 
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
