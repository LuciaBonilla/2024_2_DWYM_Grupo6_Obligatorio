import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// COMPONENTES.
import Navbar from "../components/shared-components/Navbar";
import OtherUserInfoCard from '../components/OtherUserProfilePage/OtherUserInfoCard';
import OtherUserPostsContainer from '../components/OtherUserProfilePage/OtherUserPostsContainer';

// ESTILO
import '../styles/mobile/OtherUserProfilePage.css';

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../context-providers/AuthContextProvider";

// CLASES AUXILIARES.
import BackendCaller from "../auxiliar-classes/BackendCaller";

/**
 * My Feed Page.
 * @estado NO-TERMINADO.
 */
function OtherUserProfilePage() {

    // Id del otro usuario cuyo perfil muestro
    const {id} = useParams();

    // Posts a filtrar.
    const [posts, setPosts] = useState([]);

    // Indica que está cargando.
    const [isLoading, setIsLoading] = useState(true);

    // Necesarios para obtener los posts y filtrar los posts.
    const { token, userID } = useAuthContext();

    /**
     * Dados los posts de la red, filtra sólamente aquellos que pertenecen al usuario visitado
     * @param posts
     */
    function getUserPosts(posts) {
        // Filtra los posts para obtener los del usuario actual
        const userPosts = posts.filter((post) => post.user._id == id);

        // Ordena los posts por fecha de forma descendente (más recientes primero)
        return userPosts.sort((post1, post2) => new Date(post2.createdAt) - new Date(post1.createdAt));
    }

    /**
     * Obtiene el feed.
     */
    async function fetchFeed() {
        const response = await BackendCaller.getFeed(token);

        if (response.statusCode === 200) { // OK
            setPosts(getUserPosts(response.data));
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
        <main className="other-user-profile-page">
            <h1 className="other-user-profile-page__username-header">FILLMEUSERNAME</h1>
            <OtherUserInfoCard other_id={id}/>
            <OtherUserPostsContainer userId={id} token={token} />
            <Navbar />
        </main>
    );
}

export default OtherUserProfilePage;