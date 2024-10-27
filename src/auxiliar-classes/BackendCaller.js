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
                    method: "GET",
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

    static async giveLike(postID, token) {
        try {
            const response = await fetch(this.#API_URI + "/posts/" + postID + "/like",
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
            console.error("Error al dar like:", error);
        }
    }

    static async uploadPost(token, image, caption) {
        try {
            // Crea un objeto FormData.
            const formData = new FormData();

            // Añade la imagen y el texto del caption al FormData.
            formData.append('image', image);  // 'image' es el campo que el servidor espera
            formData.append('caption', caption);  // 'caption' es el campo de texto

            const response = await fetch(this.#API_URI + "/posts/upload",
                {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                    body: formData // Establece el FormData como cuerpo de la solicitud
                }
            );

            const statusCode = response.status;

            // El resultado no es JSON sino el resultado de tomar JSON como entrada y analizarlo para producir un objeto JavaScript.
            const data = await response.json();

            return { statusCode, data };
        } catch (error) {
            console.error("Error al subir un post:", error);
        }
    }

    static async getUserProfile(userId, token) {
        try {
            const response = await fetch(`${this.#API_URI}/user/profile/${userId}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            const statusCode = response.status;

            const data = await response.json();

            return { statusCode, data };
        } catch (error) {
            console.error("Error al obtener el perfil del usuario:", error);
        }
    }
}

export default BackendCaller;