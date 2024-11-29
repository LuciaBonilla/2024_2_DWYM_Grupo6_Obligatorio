import { useNavigate } from "react-router-dom";

// IMAGES.
import defaultPhoto from "@/assets/default_profile.png";

// RUTAS.
import routes from "@/constants/routes";

// CLASES AUXILIARES.
import Base64Converter from "@/auxiliar-classes/Base64Converter";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "@/context-providers/AuthContextProvider";

/**
 * Tarjeta corta identificadora de usuario.
 * @param user - Info de usuario.
 * @estado Componente terminado.
 */
export default function ShortProfileCard({ user }) {
    const { userID } = useAuthContext();

    // Para cambiar de ruta.
    const navigate = useNavigate();

    /**
     * Redirige a un perfil de usuario. En algunos casos puede ser al perfil propio de un usuario.
     */
    function handleGoToUserProfile() {
        if (user._id !== userID) {
            navigate(routes.OTHER_USER_PROFILE_ROUTE.replace(":id", user._id));
        } else {
            navigate(routes.MY_PROFILE_ROUTE);
        }
    }

    return (
        <div className="short-profile-card" onClick={() => handleGoToUserProfile()}>
            <img className="short-profile-card__img" src={user.profilePicture === "" ? defaultPhoto : Base64Converter.checkBase64Image(user.profilePicture)} />
            <h2 className="short-profile-card__username">{user._id === userID ? "TÚ" : user.username}</h2>
        </div>
    );
}