export class BackendCaller {
    static #API_URL = "http://localhost:3001/api";

    static async register(username, email, password) {
        try {
            const response = await fetch(this.#API_URL + "/auth/register",
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

            // El resultado no es JSON sino el resultado de tomar JSON como entrada y analizarlo para producir un objeto JavaScript.
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al registrar:", error);
        }
    }

    static async login(email, password) {
        try {
            const response = await fetch(this.#API_URL + "/auth/register",
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

            // El resultado no es JSON sino el resultado de tomar JSON como entrada y analizarlo para producir un objeto JavaScript.
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    }

    static async getFeed(token) {
        try {
            const response = await fetch(this.#API_URL + "/posts/feed",
                {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            );

            // El resultado no es JSON sino el resultado de tomar JSON como entrada y analizarlo para producir un objeto JavaScript.
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al obtener el feed:", error);
        }
    }
}

export default BackendCaller;