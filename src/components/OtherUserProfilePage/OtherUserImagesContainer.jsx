import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

//AUXILIARES
import BACKEND_URI from '../../constants/BACKEND_URI';
import routes from '../../constants/routes';

function OtherUserImagesContainer({ posts }) {
    const [otherPosts, setOtherPosts] = useState(sortPosts(posts));

    /**
     * Ordena los posts en orden cronológico.
     * @param posts
     */
    function sortPosts(posts) {
        // Ordena los posts por fecha de forma descendente (más recientes primero).
        return posts.sort((post1, post2) => new Date(post2.createdAt) - new Date(post1.createdAt));
    }

    // Para cambiar de ruta.
    const navigate = useNavigate();

    /**
     * Redirige el post del usuario al clickear sobre la imagen.
     */
    function handleGoToOtherUserPostPage(post_id) {
        navigate(routes.OTHER_USER_POST_ROUTE.replace(':id', post_id));
    }

    return (
        <section className="other-user-images-container">
            {otherPosts.length > 0 ? (
                otherPosts.map((post) => (
                    <img
                        className="image-card"
                        key={post._id}
                        title={post.caption}
                        alt={post.caption}
                        src={`${BACKEND_URI}/${post.imageUrl.replace("\\", "/")}`}
                        onClick={() => handleGoToOtherUserPostPage(post._id)}
                    />
                ))
            ) : (
                <p className="other-user-images-container__no-images-message">NO HAY POSTS</p>
            )}
        </section>
    );
};

export default OtherUserImagesContainer;
