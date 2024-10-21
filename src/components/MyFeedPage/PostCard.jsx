import { useNavigate } from "react-router-dom";
import { useState } from "react";

// CLASES AUXILIARES.
import BackendCaller from "../../auxiliar-classes/BackendCaller";

// COMPONENTES.
import ShortProfileCard from "./ShortProfileCard";
import GiveLikeButton from "./GiveLikeButton";
import OpenCommentSectionButton from "./OpenCommentSectionButton";
import CommentSection from "./CommentSection";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../../context-providers/AuthContextProvider";

function PostCard({ id, user, imageURL, caption, comments, likes, createdAt, fetchFeed }) {
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
        navigate("/posts/" + id);
    }

    const { token } = useAuthContext();

    /**
     * Da un like al post.
     */
    async function handleGiveLike() {
        const response = await BackendCaller.giveLike(id, token);
        if (response.statusCode === 200) {  // OK
            // Actualiza la info.
            fetchFeed();
        }
    }

    return (
        <article className="post-card">
            {/* Tarjeta que identifica al usuario autor del post. */}
            <ShortProfileCard user={user} />

            {/* Imagen subida. */}
            <img className="post-card__uploaded-photo" src={`http://localhost:3001/${imageURL.replace("\\", "/")}`} onClick={() => handleGoToOtherUserPostPage()} />

            {/* Descripción. */}
            <p className="post-card__caption">{caption}</p>

            {/* Cantidad de likes. */}
            <p className="post-card__quantity-likes">{likes.length} Likes</p>

            {/* Botón para dar like al post. */}
            <GiveLikeButton handleGiveLike={handleGiveLike} likes={likes} />

            {/* Cantidad de comentarios. */}
            <p className="post-card__quantity-comments">{comments.length} Comentarios</p>

            {/* Fecha de publicación. */}
            <p className="post-card__created-at">Publicado el: {new Date(createdAt).toLocaleDateString('es-ES', {
                day: '2-digit',
                month: 'long',  // mes completo, o 'short' para abreviado
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}
            </p>

            {/* Botón para abrir la sección de comentarios. */}
            <OpenCommentSectionButton handleShowCommentSection={handleShowCommentSection} />

            {/* Sección de comentarios. */}
            {isCommentSectionShowing && <CommentSection comments={comments} handleHideCommentSection={handleHideCommentSection} fetchFeed={fetchFeed} />}
        </article>
    );
}

export default PostCard;