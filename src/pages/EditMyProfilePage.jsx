import { useEffect } from "react";
import { useState } from "react";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "@/context-providers/AuthContextProvider";

// CLASES AUXILIARES.
import BackendCaller from "@/auxiliar-classes/BackendCaller";

// COMPONENTES.
import MyProfileCard from "@/components/EditMyProfilePage/MyProfileCard";
import AttributeToEditMenu from "@/components/EditMyProfilePage/AttributeToEditMenu";
import EditMyProfileForm from "@/components/EditMyProfilePage/EditMyProfileForm";
import GoToPageButton from "@/components/shared/others/GoToPageButton";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";

// RUTAS.
import routes from "@/constants/routes";

/**
 * Page de editar perfil.
 * @estado componente terminado.
 */
export default function EditMyProfilePage() {
    // Indica si el formulario de editar perfil se debe mostrar.
    const [isShowingEditMyProfileForm, setIsShowingEditMyProfileForm] = useState(false);

    // Atributo a editar en el formulario.
    const [attributeToEdit, setAttributeToEdit] = useState();

    /**
     * Muestra el formulario de editar perfil.
     * @param {*} attributeToEdit Atributo del perfil a editar.
     */
    function handleShowEditMyProfileForm(attributeToEdit) {
        setAttributeToEdit(attributeToEdit);
        setIsShowingEditMyProfileForm(true);
    }

    /**
     * Oculta el formulario de editar perfil.
     */
    function handleHideEditMyProfileForm() {
        setAttributeToEdit();
        setIsShowingEditMyProfileForm(false);
    }

    // Perfil.
    const [user, setUser] = useState();

    // Necesarios para obtener y editar el perfil.
    const { userID, token } = useAuthContext();

    /**
     * Obtiene la información de usuario.
     */
    async function fetchMyUser() {
        const response = await BackendCaller.getUserProfile(userID, token);

        if (response.statusCode == 200) {
            const user = response.data.user;
            setUser(user);
        } else {
            setUser();
        }
    }

    useEffect(() => {
        fetchMyUser();
    }, []);

    return (
        <main className="edit-my-profile-page">
            {user ? (
                <>
                    {/* Título. */}
                    <h1 className="edit-my-profile-page__title">
                        <FontAwesomeIcon className="edit-my-profile-page__icon" icon={faUserPen} />
                        <span className="next-to-icon">EDITAR PERFIL</span>
                    </h1>

                    {/* Tarjeta de usuario. */}
                    <MyProfileCard
                        username={user.username}
                        profilePicture={user.profilePicture}
                    />

                    {/* Menú para seleccionar atributo a editar. */}
                    <AttributeToEditMenu handleShowEditMyProfileForm={handleShowEditMyProfileForm} />

                    {/* Formulario para editar perfil. */}
                    {isShowingEditMyProfileForm &&
                        <EditMyProfileForm
                            userData={
                                {
                                    username: user.username,
                                    profilePicture: user.profilePicture
                                }
                            }
                            handleHideEditMyProfileForm={handleHideEditMyProfileForm}
                            attributeToEdit={attributeToEdit}
                            fetchMyUser={fetchMyUser}
                        />}

                    <GoToPageButton
                        route={routes.MY_PROFILE_ROUTE}
                        textContent="VOLVER"
                        buttonClass="edit-my-profile__back-button"
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
        </main>
    );
}