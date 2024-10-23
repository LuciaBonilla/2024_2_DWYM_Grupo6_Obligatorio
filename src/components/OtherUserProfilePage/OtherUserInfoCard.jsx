import { useEffect, useState } from "react";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../../context-providers/AuthContextProvider";

// CLASES AUXILIARES.
import BackendCaller from "../../auxiliar-classes/BackendCaller";

// IMAGES.
import defaultPhoto from "../../assets/default_profile.png";

function OtherUserInfoCard({other_id: user_id}){
    // Usuario a mostrar.
    const [user, setUser] = useState({});

    // Indica que está cargando.
    const [isLoading, setIsLoading] = useState(true);    

    const { token } = useAuthContext();

    /**
     * Obtiene la info del usuario.
     */
    async function fetchUserInfo() {
        const response = await BackendCaller.getUserProfile(user_id, token);

        if (response.statusCode === 200) { // OK
            setUser(response.data);
        }
    }

    useEffect(() => {
        fetchUserInfo();
        setIsLoading(false);
    }, []) // Ejecuta cuando se renderiza el componente.

    if (isLoading) {
        return (<p className="loading-message">CARGANDO...</p>);
    }

    return (
        <article className="other-user-info-card">
            {/* Username. */}
            <p className="other-user-info__username">{user.id}</p>

            {/* Email. */}
            <p className="other-user-info__email">{user.email}</p>

            {/* Imagen de perfil. */}
            <img className="short-profile-card__img" src={user.profilePicture === "" ? defaultPhoto : ""} />

        </article>
    );
}

export default OtherUserInfoCard;