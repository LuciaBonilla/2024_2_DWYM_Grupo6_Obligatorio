import { useState } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTES.
import FileInput from "../shared-components/FileInput";
import TextAreaInput from "../shared-components/TextAreaInput";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// CLASES AUXILIARES.
import BackendCaller from "../../auxiliar-classes/BackendCaller";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../../context-providers/AuthContextProvider";

// RUTAS.
import routes from "../../constants/routes";

/**
 * Formulario para subir post.
 * @param {*} handleShowUnsuccessfulUploadModal
 * @param {*} setUnsuccessfulUploadModalMessage
 * @estado TERMINADO.
 */
function CreatePostForm({ handleShowUnsuccessfulUploadModal, setUnsuccessfulUploadModalMessage }) {
    // Atributos para crear un post.
    const [image, setImage] = useState();
    const [caption, setCaption] = useState("");
    const { token } = useAuthContext();

    // Para cambiar de ruta.
    const navigate = useNavigate();

    /**
     * Cancela subir un post.
     * @param {*} event 
     */
    function handleCancelUpload(event) {
        // Evita el submit.
        event.preventDefault();

        navigate(routes.MY_FEED_ROUTE);
    }

    /**
     * Sube un post.
     * @param event 
     */
    async function handleUploadPost(event) {
        // Evita el submit.
        event.preventDefault();

        if (image === undefined) { // Si no hay imagen.
            setUnsuccessfulUploadModalMessage("No hay imagen");
            handleShowUnsuccessfulUploadModal();
        } else {
            const response = await BackendCaller.uploadPost(token, image, caption);

            if (response.statusCode === 201) { // Created
                navigate(routes.MY_PROFILE_ROUTE);
            } else {
                setUnsuccessfulUploadModalMessage(response.data.message);
                handleShowUnsuccessfulUploadModal();
            }
        }
    }

    return (
        <form className="create-post-form">
            <FileInput
                labelClass="create-post-form__input-container create-post-form__input-container--image"
                labelContent="IMAGEN"
                inputName="create-post-image"
                inputClass="create-post-form__input create-post-form__input--image"
                setState={setImage}
                accept="image/*"
                icon={<FontAwesomeIcon className="create-post-form__input-icon" icon={faImage} />}
            />
            <TextAreaInput
                labelClass="create-post-form__input-container create-post-form__input-container--caption"
                labelContent="DESCRIPCIÓN"
                inputName="create-post-caption"
                inputClass="create-post-form__input create-post-form__input--caption"
                setState={setCaption}
                value={caption}
                icon={<FontAwesomeIcon className="create-post-form__input-icon" icon={faPenToSquare} />}
            />
            <button className="create-post-form__upload-button" onClick={(event) => handleUploadPost(event)}>SUBIR</button>
            <button className="create-post-form__cancel-button" onClick={(event) => handleCancelUpload(event)}>CANCELAR</button>
        </form>
    );
}

export default CreatePostForm;