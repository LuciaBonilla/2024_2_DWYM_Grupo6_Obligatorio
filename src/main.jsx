import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// ESTILOS.
import "normalize.css";
import "./styles/mobile/LoginPage.css";
import "./styles/tablet/LoginPage.css";
import "./styles/desktop/LoginPage.css";

// COMPONENTES.
import AppRouter from "./AppRouter.jsx";

// PROVEEDORES DE CONTEXTO.
import { AuthContextProvider } from "./context-providers/AuthContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
)