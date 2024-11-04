import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// COMPONENTES.
import Navbar from "../components/shared-components/Navbar";
import OtherUserInfoCard from '../components/OtherUserProfilePage/OtherUserInfoCard';
import OtherUserImagesContainer from '../components/OtherUserProfilePage/OtherUserImagesContainer';

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../context-providers/AuthContextProvider";

// CLASES AUXILIARES.
import BackendCaller from '../auxiliar-classes/BackendCaller';

/**
 * Other User Profile Page.
 * @estado TERMINADO.
 */
function OtherUserProfilePage() {
    // Id del otro usuario cuyo perfil muestro.
    const { id } = useParams();

    // Perfil y posts.
    const [userInfo, setUserInfo] = useState();

    // Necesarios para obtener los posts y perfil.
    const { token } = useAuthContext();

    useEffect(() => {
        async function fetchUserInfo() {
            const response = await BackendCaller.getUserProfile(id, token);
            if (response.statusCode === 200) {
                setUserInfo(response.data);
            }
        }

        fetchUserInfo();
    }, []); // Ejecuta cuando se renderiza el componente.

    return (
        <main className="other-user-profile-page">
            <h1 className="other-user-profile-page__social-network-title">PhantyNet</h1>
            {userInfo ? (
                <>
                    <OtherUserInfoCard
                        user={userInfo.user}
                        postsQuantity={userInfo.posts.length}
                    />
                    <OtherUserImagesContainer
                        posts={userInfo.posts}
                    />
                </>
            ) : (
                <p>CARGANDO...</p>
            )}
            <Navbar />
        </main>
    );
}

export default OtherUserProfilePage;