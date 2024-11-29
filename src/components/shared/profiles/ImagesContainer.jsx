import { useState } from "react";
import { useNavigate } from "react-router-dom";

// BACKEND URI.
import BACKEND_URI from "@/constants/BACKEND_URI";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "@/context-providers/AuthContextProvider";

// RUTAS.
import routes from "@/constants/routes";

/**
 * Contenedor de imágenes subidas por un usuario que llevan a los posts.
 * @param {*} userAuthorPostsID - Identificador del usuario autor de los posts.
 * @param {*} posts - Lista de posts con imágenes.
 * @estado Componente terminado.
 */
export default function ImagesContainer({
    userAuthorPostsID,
    posts
}) {
    const [postsSorted, setPostsSorted] = useState(sortPosts(posts));

    // Para cambiar de ruta.
    const navigate = useNavigate();

    // ID del usuario autenticado.
    const { userID } = useAuthContext();

    /**
     * Ordena los posts en orden cronológico.
     * @param {*} posts
     */
    function sortPosts(posts) {
        // Ordena los posts por fecha de forma descendente (más recientes primero).
        return posts.sort((post1, post2) => new Date(post2.createdAt) - new Date(post1.createdAt));
    }

    /**
     * Redirige al post de otro usuario al clickear sobre la imagen.
     */
    function handleGoToOtherUserPostPage(postID) {
        navigate(routes.OTHER_USER_POST_ROUTE.replace(':id', postID));
    }

    /**
     * Redirige al post propio del usuario al clickear sobre la imagen.
     */
    function handleGoToMyPostPage(postID) {
        navigate(routes.MY_POSTS_ROUTE.replace(":id", postID));
    }

    return (
        <section className="images-container">
            {postsSorted.length > 0 ? (
                userAuthorPostsID === userID ? (
                    // Caso si los posts son del usuario propio.
                    postsSorted.map((post) => (
                        <img
                            className="image-card"
                            key={post._id}
                            title={post.caption}
                            alt={post.caption}
                            src={`${BACKEND_URI}/${post.imageUrl.replace("\\", "/")}`}
                            onClick={() => handleGoToMyPostPage(post._id)}
                        />
                    ))
                ) : (
                    // Caso si los posts son de otro usuario.
                    postsSorted.map((post) => (
                        <img
                            className="image-card"
                            key={post._id}
                            title={post.caption}
                            alt={post.caption}
                            src={`${BACKEND_URI}/${post.imageUrl.replace("\\", "/")}`}
                            onClick={() => handleGoToOtherUserPostPage(post._id)}
                        />
                    ))
                )
            ) : (
                <p className="images-container__no-images-message">NO HAY POSTS</p>
            )}
        </section>
    );
}