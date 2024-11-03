import { useState } from "react";

// COMPONENTES.
import ImageCard from "./ImageCard";

// BACKEND URI.
import BACKEND_URI from "../../constants/BACKEND_URI";

function MyImagesContainer({ posts }) {
    const [myPosts, setMyPosts] = useState(sortMyPosts(posts));

    /**
     * Ordena los posts propios en orden cronológico.
     * @param posts
     */
    function sortMyPosts(posts) {
        // Ordena los posts por fecha de forma descendente (más recientes primero).
        return posts.sort((post1, post2) => new Date(post2.createdAt) - new Date(post1.createdAt));
    }

    return (
        <section className="my-images-container">
            {myPosts.length > 0 ? (
                myPosts.map((post) => (
                    <ImageCard
                        key={post._id}
                        postID={post._id}
                        imageURL={`${BACKEND_URI}/${post.imageUrl.replace("\\", "/")}`}
                    />
                ))
            ) : (
                <p className="my-images-container__no-images-message">NO HAS SUBIDO POSTS</p>
            )}
        </section>
    );

}

export default MyImagesContainer;