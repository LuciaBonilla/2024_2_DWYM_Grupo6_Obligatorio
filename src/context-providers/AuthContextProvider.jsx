import { createContext, useContext, useEffect, useState } from "react";

// CLASES AUXILIARES.
import BackendCaller from "../auxiliar-classes/BackendCaller";
import LocalStorageManager from "../auxiliar-classes/LocalStorageManager";

// Contexto de autenticación.
const AuthContext = createContext();

/**
 * Provee del contexto de autenticación.
 * @param {*} children
 * @estado falta funciones para actualizar el perfil de usuario.
 */
export function AuthContextProvider({ children }) {
    // Atributos del contexto de autenticación.
    const [userID, setUserID] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [token, setToken] = useState();
    const [isAuthorizated, setIsAuthorizated] = useState(false);

    // Para controlar el estado de carga.
    const [loading, setLoading] = useState(true);

    // Recarga los valores del LocalStorage cuando el componente se monta.
    useEffect(() => {
        const context = LocalStorageManager.loadAuthContextFromStorage();
        setUserID(context.userID);
        setUsername(context.username);
        setEmail(context.email);
        setToken(context.token);
        setIsAuthorizated(context.isAuthorizated);

        // Indica que la carga ha terminado.
        setLoading(false);
    }, []);

    // Actualiza el LocalStorage cada vez que cambien los valores del contexto de autenticación.
    useEffect(() => {
        if (!loading) {
            LocalStorageManager.saveAuthContextToStorage(userID, username, email, token, isAuthorizated);
        }
    }, [userID, username, email, token, isAuthorizated]);

    /**
     * Inicia sesión.
     * @param {*} email 
     * @param {*} password 
     * @returns Resultado de la operación.
     */
    async function login(email, password) {
        // Intenta iniciar sesión por backend.
        const response = await BackendCaller.login(email, password);

        let result;
        switch (response.statusCode) {
            case 200: // OK.
                setUserID(response.data._id);
                setUsername(response.data.username);
                setEmail(response.data.email);
                setToken(response.data.token);
                setIsAuthorizated(true);
                result = { success: true };
                break
            case 401 || 500: // Unauthorized o Internal Server Error.
                setUserID();
                setUsername();
                setEmail();
                setToken();
                setIsAuthorizated(false);
                result = { success: false, message: response.data.message };
                break;
            default:
                result = { success: false, message: "Ha ocurrido un error imprevisto." };
        }
        return result;
    }

    /**
     * Cierra sesión.
     */
    async function logout() {
        setUserID();
        setUsername();
        setEmail();
        setToken();
        setIsAuthorizated(false);
    }

    // Mientras se cargan los datos del LocalStorage, evita renderizar los hijos.
    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <AuthContext.Provider value={{ userID, username, email, token, isAuthorizated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}