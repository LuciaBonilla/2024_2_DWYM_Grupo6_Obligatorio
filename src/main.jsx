import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// ESTILOS.
import "@/styles/important.css"
import "normalize.css";
import "@/styles/special-styles.css";

// PARA PANTALLAS DE CARGA.
import "@/styles/mobile/shared/Loading.css";
import "@/styles/tablet/shared/Loading.css";
import "@/styles/desktop/shared/Loading.css";

// Navbar
import "@/styles/mobile/Navbar.css";
import "@/styles/tablet/Navbar.css";
import "@/styles/desktop/Navbar.css";

// LoginPage
import "@/styles/mobile/LoginPage.css";
import "@/styles/tablet/LoginPage.css";
import "@/styles/desktop/LoginPage.css";

// RegisterPage
import "@/styles/mobile/RegisterPage.css";
import "@/styles/tablet/RegisterPage.css";
import "@/styles/desktop/RegisterPage.css";

// CreatePostPage
import "@/styles/mobile/CreatePostPage.css";
import "@/styles/tablet/CreatePostPage.css";
import "@/styles/desktop/CreatePostPage.css";

// EditMyProfilePage
import "@/styles/mobile/EditMyProfilePage.css";
import "@/styles/tablet/EditMyProfilePage.css";
import "@/styles/desktop/EditMyProfilePage.css";

// SharedStyles

// PostPage (para MyPostPage, MyFeedPage y OtherUserPostPage)
import "@/styles/mobile/shared/PostPage.css";
import "@/styles/tablet/shared/PostPage.css";
import "@/styles/desktop/shared/PostPage.css";

// ProfilePage (para MyProfilePage y OtherUserProfilePage)
import "@/styles/mobile/shared/ProfilePage.css";
import "@/styles/tablet/shared/ProfilePage.css";
import "@/styles/desktop/shared/ProfilePage.css";


// COMPONENTES.
import AppRouter from "@/AppRouter.jsx";

// PROVEEDORES DE CONTEXTO.
import { AuthContextProvider } from "@/context-providers/AuthContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
)