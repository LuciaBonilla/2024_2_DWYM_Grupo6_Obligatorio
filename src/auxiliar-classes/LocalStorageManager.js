/**
 * Permite guardar y cargar el contexto de autenticación en el LocalStorage.
 * @estado TERMINADO.
 */
class LocalStorageManager {
    /**
     * Guarda el contexto de autenticación en el LocalStorage.
     * @param {*} userID 
     * @param {*} token 
     * @param {*} isAuthorizated
     * @estado TERMINADO.
     */
    static saveAuthContextToStorage(userID, token, isAuthorizated) {
        localStorage.setItem("userID", userID);
        localStorage.setItem("token", token);
        localStorage.setItem("isAuthorizated", isAuthorizated);
    }

    /**
     * Recarga el contexto de autenticación desde el LocalStorage a un objeto plano.
     * @returns Objeto plano con todo el contexto de autenticación.
     * @estado TERMINADO.
     */
    static loadAuthContextFromStorage() {
        return {
            userID: localStorage.getItem("userID"),
            token: localStorage.getItem("token"),
            isAuthorizated: (localStorage.getItem("isAuthorizated") === "true" ? true : false)
        }
    }
}

export default LocalStorageManager;