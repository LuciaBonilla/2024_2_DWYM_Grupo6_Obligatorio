import { useEffect, useState } from "react";

// BACKEND_URI.
import BACKEND_URI from "../../../constants/BACKEND_URI";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../../../context-providers/AuthContextProvider";

// CLASES AUXILIARES.
import BackendCaller from "../../../auxiliar-classes/BackendCaller";

// COMPONENTES.
import PostCard from "./PostCard";

/**
 * Contenedor de los posts.
 * @estado componente terminado.
 */
function PostCardContainer() {
    // Posts a mostrar.
    const [posts, setPosts] = useState([]);

    // Indica que está cargando.
    const [isLoading, setIsLoading] = useState(true);

    // Necesarios para obtener los posts y filtrar los posts.
    const { token, userID } = useAuthContext();

    /**
     * Dados los posts obtenidos, quita los posts propios del usuario y los restantes los ordena cronológicamente.
     * @param posts
     * @estado función terminada.
     */
    function getMyFeed(posts) {
        // Filtra los posts para eliminar los del usuario actual.
        const feed = posts.filter((post) => post.user._id !== userID);

        // Ordena los posts por fecha de forma descendente (más recientes primero).
        return feed.sort((post1, post2) => new Date(post2.createdAt) - new Date(post1.createdAt));
    }

    /**
     * Obtiene el feed del usuario.
     * @estado función terminada.
     */
    async function fetchFeed() {
        const response = await BackendCaller.getFeed(token);

        if (response.statusCode === 200) { // OK
            setPosts(getMyFeed(response.data));
        }
    }

    useEffect(() => {
        fetchFeed();
        setIsLoading(false);
    }, []) // Ejecuta cuando se renderiza el componente.

    return (
        <>
            {
                !isLoading ? (
                    <article className="post-card-container">
                        {posts.length > 0 ? (
                            posts.map((post) => (
                                <PostCard
                                    key={post._id}
                                    id={post._id}
                                    user={post.user}
                                    imageSrc={`${BACKEND_URI}/${post.imageUrl.replace("\\", "/")}`}
                                    caption={post.caption}
                                    comments={post.comments}
                                    likes={post.likes}
                                    createdAt={post.createdAt}
                                    fetchFeed={fetchFeed}
                                />
                            ))
                        ) : (
                            <p className="post-card-container__no-posts-message">NO HAY POSTS</p>
                        )}
                    </article>
                ) : (
                    <p className="loading-message">CARGANDO...</p>
                )}
        </>

    );
}

export default PostCardContainer;