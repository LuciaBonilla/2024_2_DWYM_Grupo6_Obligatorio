import { Navigate } from "react-router-dom";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "@/context-providers/AuthContextProvider";

/**
 * Protege una ruta privada no renderizando el contenido si el usuario no está autenticado.
 * @param {*} children 
 * @returns Si el usuario no está autenticado, entonces redirige a "/login". En caso contrario,
 * renderiza el contenido protegido.
 * @estado TERMINADO.
 */
export default function ProtectedRoute({ children }) {
    const { isAuthorizated } = useAuthContext();

    // Si no está autenticado, redirige a la page de login.
    if (isAuthorizated === false) {
        return <Navigate to="/login" />;
    }

    // Si está autenticado, renderiza el contenido.
    return children;
}