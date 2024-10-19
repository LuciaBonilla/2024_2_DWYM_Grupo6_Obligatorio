/**
 * Permite guardar y cargar el contexto de autenticación en el LocalStorage.
 * @estado TERMINADO.
 */
class LocalStorageManager {
    /**
     * Guarda el contexto de autenticación en el LocalStorage.
     * @param {*} userID 
     * @param {*} username 
     * @param {*} email 
     * @param {*} token 
     * @param {*} isAuthorizated 
     */
    static saveAuthContextToStorage(userID, username, email, token, isAuthorizated) {
        localStorage.setItem("userID", userID);
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("token", token);
        localStorage.setItem("isAuthorizated", isAuthorizated);
    }

    /**
     * Recarga el contexto de autenticación desde el LocalStorage a un objeto plano.
     * @returns Objeto plano con todo el contexto de autenticación.
     */
    static loadAuthContextFromStorage() {
        return {
            userID: localStorage.getItem("userID"),
            username: localStorage.getItem("username"),
            email: localStorage.getItem("email"),
            token: localStorage.getItem("token"),
            isAuthorizated: (localStorage.getItem("isAuthorizated") === "true" ? true : false)
        }
    }
}

export default LocalStorageManager;