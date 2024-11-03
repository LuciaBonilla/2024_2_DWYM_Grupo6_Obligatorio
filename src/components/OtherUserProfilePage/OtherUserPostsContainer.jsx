import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

//AUXILIARES
import BackendCaller from "../../auxiliar-classes/BackendCaller";
import BACKEND_URI from '../../constants/BACKEND_URI';
import routes from '../../constants/routes';

const OtherUserPostsContainer = ({ userId, token }) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Para cambiar de ruta.
    const navigate = useNavigate();

    /**
     * Redirige el post del usuario al clickear sobre la imagen.
     */
    function handleGoToOtherUserPostPage(post_id) {
        navigate(routes.OTHER_USER_POST_ROUTE.replace(':id', post_id));
    }

    useEffect(() => {
        const fetchUserPosts = async () => {
            setIsLoading(true);
            try {
                const response = await BackendCaller.getFeed(token);
                if (response.statusCode === 200 && response.data && Array.isArray(response.data)) {
                    setPosts(response.data);
                } else {
                    setPosts([]); 
                }
            } catch (error) {
                console.error("Error fetching user posts:", error);
                setPosts([]); 
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserPosts();
    }, [userId, token]);

    if (isLoading) {
        return <p className="loading-message">Cargando posts ...</p>;
    }

    return (
        <div className="posts-container__images">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div 
                        key={post._id} 
                        className="posts-container__image-link" 
                        onClick={() => handleGoToOtherUserPostPage(post._id)}
                    >
                        <img 
                            src={`${BACKEND_URI}/${post.imageUrl.replace("\\", "/")}`} 
                            alt={post.caption} 
                            className="posts-container__post-image" 
                        />
                        <div className="posts-container__post-info">
                            <h3 className="posts-container__post-title">{post.title}</h3>
                            <p className="posts-container__post-description">{post.description}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="posts-container__no-posts">No hay posts disponibles.</p>
            )}
        </div>
    );
};

export default OtherUserPostsContainer;
