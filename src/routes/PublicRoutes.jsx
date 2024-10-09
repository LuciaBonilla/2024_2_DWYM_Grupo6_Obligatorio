import { BrowserRouter as Routes, Route } from "react-router-dom";

/**
 * Objetivo del componente:
 * Retornar la definición de rutas públicas.
 * @returns Definición de rutas públicas.
 */
function PublicRoutes() {
    return (
        <Routes>
            <Route to="/login" element={<LoginPage />} />
            <Route to="/register" element={<RegisterPage />} />
            <Route to="*" element={<h1>Página no encontrada.</h1>} />
        </Routes>
    );
}

export default PublicRoutes;