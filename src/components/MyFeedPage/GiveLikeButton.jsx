import { useState } from "react";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as GivedLike } from "@fortawesome/free-solid-svg-icons";
import { faHeart as NoneLike } from "@fortawesome/free-regular-svg-icons";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../../context-providers/AuthContextProvider";

/**
 * Botón para dar like a un post.
 * @param handleGiveLike
 * @param likes
 * @estado TERMINADO.
 */
function GiveLikeButton({ handleGiveLike, likes }) {
    const { userID } = useAuthContext();

    // Ícono que se muestra dependiendo si se dio like o no al post.
    const [icon, setIcon] = useState(!likes.includes(userID) ? <FontAwesomeIcon className="post-card__heart-icon" icon={NoneLike} /> : <FontAwesomeIcon className="post-card__heart-icon" icon={GivedLike} />);

    return (
        <button className="post-card__like-button" onClick={() => {
            handleGiveLike();
            setIcon(<FontAwesomeIcon className="post-card__heart-icon" icon={GivedLike} />)
        }}>
            {icon}
        </button>
    );
}

export default GiveLikeButton;