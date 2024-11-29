import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// COMPONENTES.
import Navbar from "@/components/shared/others/Navbar";
import ProfileCard from "@/components/shared/profiles/ProfileCard";
import ImagesContainer from "@/components/shared/profiles/ImagesContainer";
import GoToPageButton from "@/components/shared/others/GoToPageButton";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "@/context-providers/AuthContextProvider";

// CLASES AUXILIARES.
import BackendCaller from "@/auxiliar-classes/BackendCaller";

/**
 * Other User Profile Page.
 * @estado componente terminado.
 */
export default function OtherUserProfilePage() {
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
        <main className="profile-page">
            <h1 className="profile-page__social-network-title">PhantyNet</h1>
            {userInfo ? (
                <>
                    <ProfileCard
                        user={userInfo.user}
                        postsQuantity={userInfo.posts.length}
                    />

                    <ImagesContainer
                        userAuthorPostsID={userInfo.id}
                        posts={userInfo.posts}
                    />
                </>
            ) : (
                <div className="loading-container">
                    <p className="loading-message">CARGANDO...</p>
                    <GoToPageButton
                        route="/login"
                        textContent="VOLVER A HOME"
                        buttonClass="back-button"
                    />
                </div>
            )}
            <Navbar />
        </main>
    );
}