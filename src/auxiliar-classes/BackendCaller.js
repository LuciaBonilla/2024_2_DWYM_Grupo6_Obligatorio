export class BackendCaller {
    /**
     * Identificador de la API.
     */
    static #API_URI = "http://localhost:3001/api";

    static async register(username, email, password) {
        try {
            const response = await fetch(this.#API_URI + "/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(
                        {
                            username: username,
                            email: email,
                            password: password
                        }
                    )
                }
            );

            const statusCode = response.status;

            // El resultado no es JSON sino el resultado de tomar JSON como entrada y analizarlo para producir un objeto JavaScript.
            const data = await response.json();

            return { statusCode, data };
        } catch (error) {
            console.error("Error al registrar:", error);
        }
    }

    static async login(email, password) {
        try {
            const response = await fetch(this.#API_URI + "/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(
                        {
                            email: email,
                            password: password
                        }
                    )
                }
            );

            const statusCode = response.status;

            // El resultado no es JSON sino el resultado de tomar JSON como entrada y analizarlo para producir un objeto JavaScript.
            const data = await response.json();

            return { statusCode, data };
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    }

    static async getFeed(token) {
        try {
            const response = await fetch(this.#API_URI + "/posts/feed",
                {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            );

            const statusCode = response.status;

            // El resultado no es JSON sino el resultado de tomar JSON como entrada y analizarlo para producir un objeto JavaScript.
            const data = await response.json();

            return { statusCode, data };
        } catch (error) {
            console.error("Error al obtener el feed:", error);
        }
    }
}

export default BackendCaller;