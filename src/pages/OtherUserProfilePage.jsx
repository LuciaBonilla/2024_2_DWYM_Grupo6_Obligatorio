import { useParams } from 'react-router-dom';

// COMPONENTES.
import Navbar from "../components/shared-components/Navbar";
import OtherUserInfoCard from '../components/OtherUserProfilePage/OtherUserInfoCard';

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../../context-providers/AuthContextProvider";

// CLASES AUXILIARES.
import BackendCaller from "../../auxiliar-classes/BackendCaller";

// COMPONENTES.
import PostCard from "./PostCard";

/**
 * My Feed Page.
 * @estado NO-TERMINADO.
 */
function OtherUserProfilePage() {

/**ARREGLAR EL FEED, COPIE DIRECTAMENTE, AJUSTAR A ESTA PÁGINA, LA IDEA ES SEPARAR LA PÁGINA EN DOS 
 * COMPONENTES, ARRIBA EL OTHER USER CARD CON FOTO PERFIL, NOMBE DE CUENTA Y MAIL, Y 
 * LUEGO OTRO COMPONENTE LLAMADO COMO IMAGES CONTAINER DENTRO DEL CUAL PONGO LAS IMAGENES LINKEANDO 
 * A LOS POSTS Y LA CUENTA DE CUANTOS POSTS. RECORDAR USEFFECT PARA LLAMAR A BACKEND EN OTHERUSERCARD
 *  Y CONSEGUIR LA INFO DEL OTRO USUARIO
**/
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
        <main className="other-user-profile-page">
            <h1 className="other-user-profile-page__username-header">FILLMEUSERNAME</h1>
            <OtherUserInfoCard other_id={id}/>
            <Navbar />
        </main>
    );
}

export default OtherUserProfilePage;