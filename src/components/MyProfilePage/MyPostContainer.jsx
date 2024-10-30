import { createContext, useState } from "react";
import { useAuthContext } from "../../context-providers/AuthContextProvider";
import { useEffect } from "react";
import '../../styles/mobile/MyProfilePage.css'


// CLASES AUXILIARES.
import BackendCaller from "../../auxiliar-classes/BackendCaller";

// COMPONENTES.
import PostCard from "./MyPostCard";



function PostsContainer(){
    const {username} = useAuthContext();

    // Posts a mostrar.
    const [posts, setPosts] = useState([]);

    // Indica que está cargando.
    const [isLoading, setIsLoading] = useState(true);

    // Necesarios para obtener los posts y filtrar los posts.
    const { token, userID } = useAuthContext();

    /**
     * Dados los posts obtenidos, quita los posts propios del usuario y los restantes los ordena cronológicamente.
     * @param posts
     */
    function getMyFeed(posts) {
        // Filtra los posts para eliminar los del usuario actual
        const feed = posts.filter((post) => post.user._id == userID);

        // Ordena los posts por fecha de forma descendente (más recientes primero)
        return feed.sort((post1, post2) => new Date(post2.createdAt) - new Date(post1.createdAt));
    }

    /**
     * Obtiene el feed del usuario.
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

    if (isLoading) {
        return (<p className="loading-message">CARGANDO...</p>);
    }

    return (
        <div className="my-profile-page">
            
            <div className="my-profile-container">
                
                
                <div className="profile-info-container">
                    <div className="profile-stats-container">
                        <div className="profile-photo-container">
                            <img className='short-profile-card__img' src=".\src\assets\default_profile.png" alt="Profile"/>
                            
                        </div>
                        <div className="information-container">
                            
                            
                            <div className="profile-information">
                                <div className="profile-stat">
                                    <p className="stat-number">{posts.length}</p>
                                    <p className="stat-label">Posts</p>
                                </div>
                                <div className="profile-stat">
                                    <p className="stat-number">100</p>
                                    <p className="stat-label">Followers</p>
                                </div>
                                <div className="profile-stat">
                                    <p className="stat-number">100</p>
                                    <p className="stat-label">Following</p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>

                    <div className="buttons-profile">
                        <div className="profile-name-container">
                            <h1 className="profile-name">{username}</h1>
                        </div>
                        <button className='profile-log-out-button'>Cerrar Sesión</button>
                        <button className='profile-log-out-button'>Editar Perfil</button>
                    </div>
                </div>
            </div>

            <article className="instagram-profile">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <PostCard
                            key={post._id}
                            id={post._id}
                            user={post.user}
                            imageURL={post.imageUrl}
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
        </div>
    );

}

export default PostsContainer;