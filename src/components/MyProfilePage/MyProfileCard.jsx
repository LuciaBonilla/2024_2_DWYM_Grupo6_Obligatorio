// RUTAS.
import routes from "../../constants/routes";

// IMAGES.
import defaultPhoto from "../../assets/default_profile.png";

// COMPONENTES.
import GoToPageButton from "../shared-components/GoToPageButton";

// CLASES AUXILIARES.
import Base64Converter from "../../auxiliar-classes/Base64Converter";

/**
 * Tarjeta de perfil propio.
 * @param {*} user
 * @param {*} postsQuantity 
 * @estado TERMINADO.
 */
function MyProfileCard({ user, postsQuantity }) {
    return (
        <article className="my-profile-card">
            <section className="my-profile-card__info">
                <img className="my-profile-card__img" src={user.profilePicture === "" ? defaultPhoto : Base64Converter.checkBase64Image(user.profilePicture)} />
                <p className="my-profile-card__username">{user.username}</p>
                <p className="my-profile-card__email">{user.email}</p>
                <p className="my-profile-card__posts-quantity">{postsQuantity} posts</p>
                <p className="my-profile-card__created-at">
                    Empezaste el {new Date(user.createdAt).toLocaleDateString(document.documentElement.lang, {
                        day: '2-digit',
                        month: 'long',  // mes completo, o 'short' para abreviado
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </p>
            </section>

            <section className="my-profile-card__buttons">
                <GoToPageButton
                    route={routes.LOGIN_ROUTE}
                    textContent="CERRAR SESIÓN"
                    buttonClass="my-profile-card__logout-button"
                />
                <GoToPageButton
                    route={routes.MY_PROFILE_EDIT_ROUTE}
                    textContent="EDITAR PERFIL"
                    buttonClass="my-profile-card__edit-my-profile-button"
                />
            </section>
        </article>
    )
}

export default MyProfileCard;