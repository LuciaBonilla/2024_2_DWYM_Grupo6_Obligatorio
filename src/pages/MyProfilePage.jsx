import { useState, useEffect } from "react";

// COMPONENTES.
import ImagesContainer from "@/components/shared/profiles/ImagesContainer";
import GoToPageButton from "@/components/shared/others/GoToPageButton";
import ProfileCard from "@/components/shared/profiles/ProfileCard";
import Navbar from "@/components/shared/others/Navbar";

// CLASES AUXILIARES.
import BackendCaller from "@/auxiliar-classes/BackendCaller";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "@/context-providers/AuthContextProvider";

// RUTAS.
import routes from "@/constants/routes";

/**
 * Página de mi perfil.
 * @estado componente terminado.
 */
export default function MyProfilePage() {
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
        <main className="profile-page">
            <h1 className="profile-page__social-network-title">PhantyNet</h1>
            {userInfo ? (
                <>
                    <ProfileCard
                        user={userInfo.user}
                        postsQuantity={userInfo.posts.length}
                    >
                        <section className="profile-card__buttons">
                            <GoToPageButton
                                route={routes.LOGIN_ROUTE}
                                textContent="CERRAR SESIÓN"
                                buttonClass="profile-card__logout-button"
                            />
                            <GoToPageButton
                                route={routes.MY_PROFILE_EDIT_ROUTE}
                                textContent="EDITAR PERFIL"
                                buttonClass="profile-card__edit-profile-button"
                            />
                        </section>
                    </ProfileCard>

                    <ImagesContainer
                        userAuthorPostsID={userInfo.user._id}
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