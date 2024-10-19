import { Routes, Route, Navigate } from "react-router-dom";

// RUTA PROTEGIDA.
import ProtectedRoute from "./routes/ProtectedRoute";

// 9 PAGES.
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyFeedPage from "./pages/MyFeedPage";
import MyProfilePage from "./pages/MyProfilePage";
import CreatePostPage from "./pages/CreatePostPage";
import EditMyProfilePage from "./pages/EditMyProfilePage";
import MyPostPage from "./pages/MyPostPage";
import OtherUserProfilePage from "./pages/OtherUserProfilePage";
import OtherUserPostPage from "./pages/OtherUserPostPage";

/**
 * Define las rutas públicas y las rutas privadas.
 * @estado TERMINADO.
 */
function AppRouter() {
  return (
    <>
      <Routes>
        {/* Rutas públicas. */}
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
        {/* Redirige de "/" a "/login" directamente. */}
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />
        <Route
          path="*"
          element={<h1>Página no encontrada.</h1>}
        />

        {/* Rutas privadas. */}
        <Route
          path="/myfeed"
          element={
            <ProtectedRoute>
              <MyFeedPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createpost"
          element={
            <ProtectedRoute>
              <CreatePostPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myprofile"
          element={
            <ProtectedRoute>
              <MyProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myprofile/edit"
          element={
            <ProtectedRoute>
              <EditMyProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myposts/:id"
          element={
            <ProtectedRoute>
              <MyPostPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles/:id"
          element={
            <ProtectedRoute>
              <OtherUserProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts/:id"
          element={
            <ProtectedRoute>
              <OtherUserPostPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default AppRouter;