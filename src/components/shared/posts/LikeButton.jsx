import { useState } from "react";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as GivedLike } from "@fortawesome/free-solid-svg-icons";
import { faHeart as NoneLike } from "@fortawesome/free-regular-svg-icons";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "@/context-providers/AuthContextProvider";

// CLASES AUXILIARES.
import BackendCaller from "@/auxiliar-classes/BackendCaller";

/**
 * Botón para dar o quitar like a un post.
 * @param {*} postID - Identificador del post al que se le va a dar o quitar like.
 * @param {*} likes - Array con las IDs de usuarios que dieron like al post.
 * @param {*} fetchFeed - Función para actualizar la lista de posts después de dar un like.
 * @estado Componente terminado.
 */
export default function LikeButton({
    postID,
    likes,
    fetchFeed
}) {
    const { userID, token } = useAuthContext();

    // Indica si se dio like al post.
    const [likeIsGived, setLikeIsGived] = useState(likes.includes(userID));

    // Ícono que se muestra dependiendo si se dio like o no al post.
    const [icon, setIcon] = useState(!likeIsGived ? <FontAwesomeIcon className="post-card__heart-icon" icon={NoneLike} /> : <FontAwesomeIcon className="post-card__heart-icon" icon={GivedLike} />);

    /**
     * Da un like al post.
     */
    async function handleGiveLike() {
        const response = await BackendCaller.giveLike(postID, token);
        if (response.statusCode === 200) {  // OK
            // Actualiza la info.
            fetchFeed();
            setLikeIsGived(true);
        }
    }

    /**
     * Quita el like a un post.
     */
    async function handleDeleteLike() {
        const response = await BackendCaller.deleteLike(postID, token);
        if (response.statusCode === 200) {  // OK
            // Actualiza la info.
            fetchFeed();
            setLikeIsGived(false);
        }
    }

    return (
        <button className="post-card__like-button" onClick={() => {
            if (!likeIsGived) {
                handleGiveLike();
                setIcon(<FontAwesomeIcon className="post-card__heart-icon" icon={GivedLike} />)
            } else {
                handleDeleteLike();
                setIcon(<FontAwesomeIcon className="post-card__heart-icon" icon={NoneLike} />)
            }
        }}>
            {icon}
        </button>
    );
}