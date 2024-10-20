import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// ESTILOS.
import "normalize.css";
import "./styles/special-styles.css";

// LoginPage
import "./styles/mobile/LoginPage.css";
import "./styles/tablet/LoginPage.css";
import "./styles/desktop/LoginPage.css";

// RegisterPage
import "./styles/mobile/RegisterPage.css";
import "./styles/tablet/RegisterPage.css";
import "./styles/desktop/RegisterPage.css";

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