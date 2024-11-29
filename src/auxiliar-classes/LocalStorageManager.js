/**
 * Permite guardar y cargar el contexto de autenticación en el LocalStorage.
 * @estado clase terminada.
 */
export default class LocalStorageManager {
    /**
     * Guarda el contexto de autenticación en el LocalStorage.
     * @param {*} userID 
     * @param {*} token 
     * @param {*} isAuthorizated
     * @estado método terminado.
     */
    static saveAuthContextToStorage(userID, token, isAuthorizated) {
        localStorage.setItem("userID", userID);
        localStorage.setItem("token", token);
        localStorage.setItem("isAuthorizated", isAuthorizated);
    }

    /**
     * Recarga el contexto de autenticación desde el LocalStorage a un objeto plano.
     * @returns Objeto plano con todo el contexto de autenticación.
     * @estado método terminado.
     */
    static loadAuthContextFromStorage() {
        return {
            userID: localStorage.getItem("userID"),
            token: localStorage.getItem("token"),
            isAuthorizated: (localStorage.getItem("isAuthorizated") === "true" ? true : false)
        }
    }
}