import { BrowserRouter as Routes, Route } from "react-router-dom";

/**
 * Objetivo del componente:
 * Retornar la definición de rutas privadas.
 * @returns Definición de rutas privadas.
 */
function PrivateRoutes() {
    return (
        <Routes>
            <Route to="/myfeed" element={<MyFeedPage />} />
            <Route to="/myprofile" element={<MyProfilePage />} />
        </Routes>
    );
}

export default PrivateRoutes;