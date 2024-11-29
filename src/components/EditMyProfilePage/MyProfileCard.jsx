// IMAGES.
import defaultPhoto from "@/assets/default_profile.png";

// CLASES AUXILIARES.
import Base64Converter from "@/auxiliar-classes/Base64Converter";

/**
 * Tarjeta de perfil al editar perfil.
 * @param {*} username 
 * @param {*} profilePicture 
 * @estado componente terminado.
 */
export default function MyProfileCard({
    username,
    profilePicture
}) {
    return (
        <article className="edit-my-profile-card">
            <img className="edit-my-profile-card__profile-picture" src={profilePicture === "" ? defaultPhoto : Base64Converter.checkBase64Image(profilePicture)} />
            <h2 className="edit-my-profile-card__username">{username}</h2>
        </article>
    )
}