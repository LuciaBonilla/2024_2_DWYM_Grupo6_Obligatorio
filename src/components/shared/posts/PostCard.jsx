import { useNavigate } from "react-router-dom";
import { useState } from "react";

// COMPONENTES.
import ShortProfileCard from "@/components/shared/profiles/ShortProfileCard";
import LikeButton from "@/components/shared/posts/LikeButton";
import CommentSection from "@/components/shared/posts/comments/CommentSection";

// RUTAS.
import routes from "@/constants/routes";

/**
 * Tarjeta de post.
 * @param {*} id - Identificador único del post.
 * @param {*} user - Información del usuario que creó el post.
 * @param {*} imageSrc - Fuente de la imagen del post.
 * @param {*} caption - Descripción del post.
 * @param {*} comments - Comentarios asociados al post.
 * @param {*} likes - Array de IDs de los usuarios que dieron like al post.
 * @param {*} createdAt - Fecha de creación del post.
 * @param {*} fetchFeed - Función para actualizar la lista de posts.
 * @estado Componente terminado.
 */
export default function PostCard({
    id,
    user,
    imageSrc,
    caption,
    comments,
    likes,
    createdAt,
    fetchFeed
}) {
    // Indica si la sección de comentarios se debe mostar.
    const [isCommentSectionShowing, setIsCommentSectionShowing] = useState(false);

    /**
     * Muestra la sección de comentarios.
     */
    function handleShowCommentSection() {
        setIsCommentSectionShowing(true);
    }

    /**
     * Oculta la sección de comentarios.
     */
    function handleHideCommentSection() {
        setIsCommentSectionShowing(false);
    }

    // Para cambiar de ruta.
    const navigate = useNavigate();

    /**
     * Redirige a la page de un post de un usuario ajeno.
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
            <LikeButton
                postID={id}
                likes={likes}
                fetchFeed={fetchFeed}
            />

            {/* Cantidad de comentarios. */}
            <p className="post-card__quantity-comments">{comments.length} Comentarios</p>

            {/* Fecha de publicación. */}
            <p className="post-card__created-at">Publicado el: {new Date(createdAt).toLocaleDateString(document.documentElement.lang, {
                day: "2-digit",
                month: "long",  // mes completo, o "short" para abreviado
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit"
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