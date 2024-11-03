import { useState, useEffect } from "react";

// COMPONENTES.
import MyImagesContainer from "../components/MyProfilePage/MyImagesContainer";
import MyProfileCard from "../components/MyProfilePage/MyProfileCard";
import Navbar from "../components/shared-components/Navbar";

// CLASES AUXILIARES.
import BackendCaller from "../auxiliar-classes/BackendCaller";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../context-providers/AuthContextProvider";

/**
 * Página de mi perfil.
 */
function MyProfilePage() {
    // Perfil y posts.
    const [userInfo, setUserInfo] = useState();

    // Necesarios para obtener los posts y perfil.
    const { token, userID } = useAuthContext();

    useEffect(() => {
        async function fetchUserInfo() {
            const response = await BackendCaller.getUserProfile(userID, token);
            if (response.statusCode === 200) {
                setUserInfo(response.data);
            }
        }

        fetchUserInfo();
    }, []); // Ejecuta cuando se renderiza el componente.

    return (
        <main className="my-profile-page">
            <h1 className="my-profile-page__social-network-title">PhantyNet</h1>
            {userInfo ? (
                <>
                    <MyProfileCard
                        user={userInfo.user}
                        postsQuantity={userInfo.posts.length}
                    />
                    <MyImagesContainer
                        posts={userInfo.posts}
                    />
                </>
            ) : (
                <p>CARGANDO..</p>
            )}
            <Navbar />
        </main>
    );
}

export default MyProfilePage;