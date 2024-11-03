import { useEffect } from "react";
import { useState } from "react";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../context-providers/AuthContextProvider";

// CLASES AUXILIARES.
import BackendCaller from "../auxiliar-classes/BackendCaller";

// COMPONENTES.
import MyProfileCard from "../components/EditMyProfilePage/MyProfileCard";
import AttributeToEditMenu from "../components/EditMyProfilePage/AttributeToEditMenu";
import EditMyProfileForm from "../components/EditMyProfilePage/EditMyProfileForm";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";

/**
 * Page de editar perfil.
 * @estado TERMINADO.
 */
function EditMyProfilePage() {
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

    // Atributos que se pueden editar del perfil.
    const [username, setUsername] = useState();
    const [profilePicture, setProfilePicture] = useState();

    // Necesarios para obtener y editar el perfil.
    const { userID, token } = useAuthContext();

    // Controla la carga del perfil.
    const [loading, setLoading] = useState(true);
    const [errorLoading, setErrorLoading] = useState();

    /**
     * Obtiene la información de usuario.
     */
    async function fetchMyUser() {
        const response = await BackendCaller.getUserProfile(userID, token);

        if (response.statusCode == 200) {
            const user = response.data.user;
            setUsername(user.username);
            setProfilePicture(user.profilePicture);
        } else {
            setUsername();
            setProfilePicture();
            setErrorLoading(response.data.message);
        }
    }

    useEffect(() => {
        fetchMyUser();
        setLoading(false);
    }, []);

    if (loading) {
        return (<div>CARGANDO...</div>);
    }

    if (errorLoading) {
        return (<div>{errorLoading}</div>);
    }

    return (
        <main className="edit-my-profile-page">
            {/* Título. */}
            <h1 className="edit-my-profile-page__title">
                <FontAwesomeIcon className="edit-my-profile-page__icon" icon={faUserPen} />
                <span className="next-to-icon">EDITAR PERFIL</span>
            </h1>

            {/* Tarjeta de usuario. */}
            <MyProfileCard
                username={username}
                profilePicture={profilePicture}
            />

            {/* Menú para seleccionar atributo a editar. */}
            <AttributeToEditMenu handleShowEditMyProfileForm={handleShowEditMyProfileForm} />

            {/* Formulario para editar perfil. */}
            {isShowingEditMyProfileForm &&
                <EditMyProfileForm
                    userData={
                        {
                            username: username,
                            profilePicture: profilePicture
                        }
                    }
                    handleHideEditMyProfileForm={handleHideEditMyProfileForm}
                    attributeToEdit={attributeToEdit}
                    fetchMyUser={fetchMyUser}
                />}
        </main>
    );
}

export default EditMyProfilePage;