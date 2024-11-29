// IMAGES.
import defaultPhoto from "@/assets/default_profile.png";

// CLASES AUXILIARES.
import Base64Converter from "@/auxiliar-classes/Base64Converter";

/**
 * Tarjeta detallada de perfil.
 * @param {*} user - Información del usuario para mostrar en la tarjeta.
 * @param {*} postsQuantity - Cantidad de posts del usuario.
 * @param {*} children - Contenidos adicionales o elementos anidados dentro de la tarjeta.
 * @estado Componente terminado.
 */
export default function ProfileCard({
    user,
    postsQuantity,
    children
}) {
    return (
        <article className="profile-card">
            <section className="profile-card__info">
                <img className="profile-card__img" src={user.profilePicture === "" ? defaultPhoto : Base64Converter.checkBase64Image(user.profilePicture)} />
                <p className="profile-card__username">{user.username}</p>
                <p className="profile-card__email">{user.email}</p>
                <p className="profile-card__posts-quantity">{postsQuantity} posts</p>
                <p className="profile-card__created-at">
                    Empezó el {new Date(user.createdAt).toLocaleDateString(document.documentElement.lang, {
                        day: '2-digit',
                        month: 'long',  // mes completo, o 'short' para abreviado
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </p>
            </section>
            {children}
        </article>
    )
}