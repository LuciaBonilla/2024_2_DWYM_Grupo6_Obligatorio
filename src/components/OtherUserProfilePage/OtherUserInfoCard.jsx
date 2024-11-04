// IMAGES.
import defaultPhoto from "../../assets/default_profile.png";

// CLASES AUXILIARES.
import Base64Converter from "../../auxiliar-classes/Base64Converter";

function OtherUserInfoCard({ user, postsQuantity }) {
    return (
        <article className="other-user-profile-card">
            <img className="other-user-profile-card__img" alt={user.username} src={user.profilePicture === "" ? defaultPhoto : Base64Converter.checkBase64Image(user.profilePicture)} />
            <p className="other-user-profile-card__username">{user.username}</p>
            <p className="other-user-profile-card__email">{user.email}</p>
            <p className="other-user-profile-card__posts-quantity">{postsQuantity} posts</p>
            <p className="other-user-profile-card__created-at">
                Empezó el {new Date(user.createdAt).toLocaleDateString(document.documentElement.lang, {
                    day: '2-digit',
                    month: 'long',  // mes completo, o 'short' para abreviado
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })}
            </p>
        </article>
    );

}

export default OtherUserInfoCard;