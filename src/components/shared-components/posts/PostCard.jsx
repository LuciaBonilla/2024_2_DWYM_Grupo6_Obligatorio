import { useNavigate } from "react-router-dom";
import { useState } from "react";

// COMPONENTES.
import ShortProfileCard from "../profiles/ShortProfileCard";
import GiveLikeButton from "./GiveLikeButton";
import CommentSection from "./comments/CommentSection";

// RUTAS.
import routes from "../../../constants/routes";

/**
 * Tarjeta de post.
 * @param {*} id
 * @param {*} user
 * @param {*} imageSrc
 * @param {*} caption 
 * @param {*} commentsIDs
 * @param {*} likes
 * @param {*} createdAt
 * @param {*} fetchFeed
 * @estado TERMINADO.
 */
function PostCard({ id, user, imageSrc, caption, comments, likes, createdAt, fetchFeed }) {
    // Indica si la sección de comentarios se debe mostar.
    const [isCommentSectionShowing, setIsCommentSectionShowing] = useState(false);

    /**
     * Muestra la sección de comentarios.
     * @estado TERMINADO.
     */
    function handleShowCommentSection() {
        setIsCommentSectionShowing(true);
    }

    /**
     * Oculta la sección de comentarios.
     * @estado TERMINADO.
     */
    function handleHideCommentSection() {
        setIsCommentSectionShowing(false);
    }

    // Para cambiar de ruta.
    const navigate = useNavigate();

    /**
     * Redirige a la page de un post de un usuario ajeno.
     * @estado TERMINADO.
     */
    function handleGoToOtherUserPostPage() {
        navigate(routes.OTHER_USER_POST_ROUTE.replace(":id", id));
    }

    return (
        <article className="post-card">
            {/* Tarjeta que identifica al usuario autor del post. */}
            <ShortProfileCard user={user} />

            {/* Imagen subida. */}
            <img className="post-card__uploaded-photo" src={imageSrc} onClick={() => handleGoToOtherUserPostPage()} />

            {/* Descripción. */}
            <p className="post-card__caption">{caption}</p>

            {/* Cantidad de likes. */}
            <p className="post-card__quantity-likes">{likes.length} Likes</p>

            {/* Botón para dar like al post. */}
            <GiveLikeButton
                postID={id}
                likes={likes}
                fetchFeed={fetchFeed}
            />

            {/* Cantidad de comentarios. */}
            <p className="post-card__quantity-comments">{comments.length} Comentarios</p>

            {/* Fecha de publicación. */}
            <p className="post-card__created-at">Publicado el: {new Date(createdAt).toLocaleDateString(document.documentElement.lang, {
                day: '2-digit',
                month: 'long',  // mes completo, o 'short' para abreviado
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}
            </p>

            {/* Botón para abrir la sección de comentarios. */}
            <button className="post-card__show-comment-section-button" onClick={() => handleShowCommentSection()}>VER COMENTARIOS</button>

            {/* Sección de comentarios. */}
            {isCommentSectionShowing &&
                <CommentSection
                    postID={id}
                    comments={comments}
                    handleHideCommentSection={handleHideCommentSection}
                    fetchFeed={fetchFeed}
                />}
        </article>
    );
}

export default PostCard;