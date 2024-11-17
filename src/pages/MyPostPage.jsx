import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// BACKEND_URI.
import BACKEND_URI from "../constants/BACKEND_URI";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../context-providers/AuthContextProvider";

// CLASES AUXILIARES.
import BackendCaller from "../auxiliar-classes/BackendCaller";

// COMPONENTES.
import PostCard from "../components/shared/posts/PostCard";
import Navbar from "../components/shared/others/Navbar";

/**
 * Página para ver un post específico.
 * @estado componente terminado.
 */
function MyPostPage() {
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { token } = useAuthContext();
    const { id: postId } = useParams();

    /**
     * Obtiene el post específico por ID.
     * @estado función terminada.
     */
    async function fetchPost() {
        const response = await BackendCaller.getFeed(token);

        if (response.statusCode === 200) {
            // Filtrar el post específico por su ID.
            const specificPost = response.data.find(post => post._id === postId);
            if (specificPost) {
                setPost(specificPost);
            } else {
                console.error("Post no encontrado");
            }
        } else {
            console.error("Error al cargar el Post");
        }
        setIsLoading(false);
    }

    useEffect(() => {
        if (postId) {
            fetchPost();
        }
    }, [postId, token]);

    return (
        <main className="post-page">
            <h1 className="post-page__social-network-title">PhantyNet</h1>
            {!isLoading ? (
                post ? (
                    <article className="post-card-container">
                        <PostCard
                            id={post._id}
                            user={post.user}
                            imageSrc={`${BACKEND_URI}/${post.imageUrl.replace("\\", "/")}`}
                            caption={post.caption}
                            comments={post.comments} 
                            likes={post.likes} 
                            createdAt={post.createdAt}
                            fetchFeed={fetchPost} 
                        />
                    </article>
                ) : (
                    <p className="post-card-container__no-posts-message">Post no encontrado</p>
                )
            ) : (
                <p className="loading-message">Cargando...</p>
            )}
            <Navbar />
        </main>
    );
}

export default MyPostPage;
