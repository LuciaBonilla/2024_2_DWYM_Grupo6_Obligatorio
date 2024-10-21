import { useNavigate } from "react-router-dom";

// IMAGES.
import defaultPhoto from "../../assets/default_profile.png";

/**
 * Tarjeta corta identificadora de usuario.
 * @param user
 * @estado falta definir ruta de foto de perfil.
 */
function ShortProfileCard({ user }) {
    // Para cambiar de ruta.
    const navigate = useNavigate();

    /**
     * Redirige a un perfil de usuario.
     */
    function handleGoToOtherUserProfile() {
        navigate("/profiles/" + user._id);
    }

    return (
        <div className="short-profile-card" onClick={() => handleGoToOtherUserProfile()}>
            <img className="short-profile-card__img" src={user.profilePicture === "" ? defaultPhoto : ""} />
            <h2 className="short-profile-card__username">{user.username}</h2>
        </div>
    );
}

export default ShortProfileCard;