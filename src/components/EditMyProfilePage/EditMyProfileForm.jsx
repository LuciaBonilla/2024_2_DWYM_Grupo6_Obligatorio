import { useState } from "react";

// CLASES AUXILIARES.
import BackendCaller from "../../auxiliar-classes/BackendCaller";
import Base64Converter from "../../auxiliar-classes/Base64Converter";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../../context-providers/AuthContextProvider";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleXmark, faImagePortrait } from "@fortawesome/free-solid-svg-icons";

// COMPONENTES.
import NormalInput from "../shared/inputs/NormalInput";
import FileInput from "../shared/inputs/FileInput";
import OperationResultModal from "../shared/others/OperationResultModal";

/**
 * Formulario para editar perfil.
 * @param {*} userData
 * @param {*} handleHideEditMyProfileForm
 * @param {*} attributeToEdit
 * @param {*} fetchMyUser
 * @estado componente terminado.
 */
function EditMyProfileForm({ userData, handleHideEditMyProfileForm, attributeToEdit, fetchMyUser }) {
    // Indica si el modal de edición no exitosa se debe mostrar.
    const [isShowingUnsuccessfulEditModal, setIsShowingUnsuccessfulEditModal] = useState(false);

    // Mensaje del modal de edición no exitosa.
    const [unsuccessfulEditMessage, setUnsuccessfulEditMessage] = useState();

    /**
     * Muestra el modal de edición no exitosa.
     * @estado función terminada.
     */
    function handleShowUnsuccessfulEditModal() {
        setIsShowingUnsuccessfulEditModal(true);
    }

    /**
     * Oculta el modal de edición no exitosa.
     * @estado función terminada.
     */
    function handleHideUnsuccessfulEditModal() {
        setUnsuccessfulEditMessage();
        setIsShowingUnsuccessfulEditModal(false);
    }

    // Valor del nuevo atributo del perfil.
    const [inputContent, setInputContent] = useState("");

    // Necesario para editar el perfil.
    const { token } = useAuthContext();

    /**
     * Edita el perfil del usuario autenticado (edita el atributo elegido).
     * @param {*} event
     * @estado función terminada. 
     */
    async function handleEditMyProfile(event) {
        // Para evitar submit.
        event.preventDefault();

        if (inputContent === "") {
            handleShowUnsuccessfulEditModal();
            setUnsuccessfulEditMessage("Está vacío");
        } else {
            let response;
            switch (attributeToEdit) {
                case ("username"):
                    response = await BackendCaller.editProfile(token, inputContent, userData.profilePicture);
                    break;
                case ("profilePicture"):
                    response = await BackendCaller.editProfile(token, userData.username, await Base64Converter.imageToBase64(inputContent));
                    break;
            }

            if (response.statusCode === 200) {
                fetchMyUser();
                handleHideEditMyProfileForm();
            } else {
                handleShowUnsuccessfulEditModal();
                setUnsuccessfulEditMessage(response.data.message);
            }
        }
    }

    /**
     * Cancela la edición del perfil.
     * @param {*} event 
     * @estado función terminada.
     */
    function handleCancelEditMyProfile(event) {
        event.preventDefault();
        setInputContent("");
        handleHideEditMyProfileForm();
    }

    return (
        <form className="edit-my-profile-form">
            {/* Input según el atributo elegido a editar. */}
            {attributeToEdit === "username" ?
                <NormalInput
                    labelClass="edit-my-profile-form__input-container edit-my-profile-form__input-container--username"
                    labelContent="USUARIO"
                    inputName="edit-my-profile-username"
                    inputClass="edit-my-profile-form__input edit-my-profile-form__input--username"
                    inputType="text"
                    setState={setInputContent}
                    value={inputContent}
                    icon={<FontAwesomeIcon className="edit-my-profile-form__input-icon" icon={faUser} />}
                /> : null
            }

            {attributeToEdit === "profilePicture" ?
                <FileInput
                    labelClass="edit-my-profile-form__input-container edit-my-profile-form__input-container--profile-picture"
                    labelContent="FOTO DE PERFIL"
                    inputName="edit-my-profile-profile-picture"
                    inputClass="edit-my-profile-form__input edit-my-profile-form__input--profile-picture"
                    setState={setInputContent}
                    accept="image/*"
                    icon={<FontAwesomeIcon className="edit-my-profile-form__input-icon" icon={faImagePortrait} />}
                /> : null
            }

            <button className="edit-my-profile-form__cancel-button" onClick={(event) => handleCancelEditMyProfile(event)}>CANCELAR</button>
            <button className="edit-my-profile-form__ok-button" onClick={(event) => handleEditMyProfile(event)}>ACEPTAR</button>

            {isShowingUnsuccessfulEditModal &&
                <OperationResultModal
                    modalClass="unsuccessful-edit-modal"
                    messageClass="unsuccessful-edit-modal__message"
                    message={unsuccessfulEditMessage}
                    iconClass="unsuccessful-edit-modal__icon"
                    icon={faCircleXmark}
                    buttonClass="unsuccessful-edit-modal__close-modal-button"
                    handleHideOperationResultModal={handleHideUnsuccessfulEditModal}
                    buttonText="OK"
                />
            }
        </form>
    )
}

export default EditMyProfileForm;