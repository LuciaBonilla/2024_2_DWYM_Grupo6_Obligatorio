import React, { useEffect, useState } from 'react';
import BackendCaller from "../../auxiliar-classes/BackendCaller";
import { useNavigate } from "react-router-dom";

const OtherUserPostsContainer = ({ userId, token }) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Para cambiar de ruta.
    const navigate = useNavigate();

    /**
     * Redirige el post del usuario al clickear sobre la imagen.
     */
    function handleGoToOtherUserPostPage(post_id) {
        navigate(`/posts/${post_id}`);
    }

    useEffect(() => {
        const fetchUserPosts = async () => {
            const response = await BackendCaller.getFeed(token);
            if (response.statusCode === 200) {
                const filteredPosts = response.data.filter(post => post.user._id === userId);
                filteredPosts.sort((post1, post2) => new Date(post2.createdAt) - new Date(post1.createdAt));
                setPosts(filteredPosts);
            }
            setIsLoading(false);
        };

        fetchUserPosts();
    }, [userId, token]);

    if (isLoading) {
        return <p className="loading-message">Cargando posts ...</p>;
    }

    return (
        <div className="posts-container__images">
            {posts.map((post) => (
                <div key={post._id} className="posts-container__image-link" onClick={() => handleGoToOtherUserPostPage(post._id)}>
                    <img src={`http://localhost:3001/${post.imageUrl.replace("\\", "/")}`} alt={post.caption} className="posts-container__post-image" />
                </div>
            ))}
        </div>
    );
};

export default OtherUserPostsContainer;
