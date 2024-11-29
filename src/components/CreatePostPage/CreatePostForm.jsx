import { useState } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTES.
import FileInput from "@/components/shared/inputs/FileInput";
import TextAreaInput from "@/components/shared/inputs/TextAreaInput";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// CLASES AUXILIARES.
import BackendCaller from "@/auxiliar-classes/BackendCaller";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "@/context-providers/AuthContextProvider";

// RUTAS.
import routes from "@/constants/routes";

/**
 * Formulario para subir post.
 * @param {*} handleShowUnsuccessfulUploadModal - Función para manejar la visualización de un modal en caso de error al subir.
 * @param {*} setUnsuccessfulUploadModalMessage - Función para establecer el mensaje del modal en caso de error.
 * @estado Componente terminado.
 */
export default function CreatePostForm({
    handleShowUnsuccessfulUploadModal,
    setUnsuccessfulUploadModalMessage
}) {
    // Estado para crear un post.
    const [image, setImage] = useState();
    const [caption, setCaption] = useState("");
    const { token } = useAuthContext();

    // Para cambiar de ruta.
    const navigate = useNavigate();

    /**
     * Maneja cancelar subir un post.
     * @param {*} event
     */
    function handleCancelUpload(event) {
        // Evita el submit.
        event.preventDefault();

        navigate(routes.MY_FEED_ROUTE);
    }

    /**
     * Maneja subir un post.
     * @param {*} event
     */
    async function handleUploadPost(event) {
        // Evita el submit.
        event.preventDefault();

        if (image === undefined) { // Si no hay imagen.
            setUnsuccessfulUploadModalMessage("No hay imagen");
            handleShowUnsuccessfulUploadModal();
        } else {
            const response = await BackendCaller.uploadPost(token, image, caption);

            if (response.statusCode === 201) { // Created.
                navigate(routes.MY_PROFILE_ROUTE);
            } else { // Error.
                setUnsuccessfulUploadModalMessage(response.data.message);
                handleShowUnsuccessfulUploadModal();
            }
        }
    }

    return (
        <form className="create-post-form">
            {/* Imagen. */}
            <FileInput
                labelClass="create-post-form__input-container create-post-form__input-container--image"
                labelContent="IMAGEN"
                inputName="create-post-image"
                inputClass="create-post-form__input create-post-form__input--image"
                setState={setImage}
                accept="image/*"
                icon={<FontAwesomeIcon className="create-post-form__input-icon" icon={faImage} />}
            />
            {/* Descripción. */}
            <TextAreaInput
                labelClass="create-post-form__input-container create-post-form__input-container--caption"
                labelContent="DESCRIPCIÓN"
                inputName="create-post-caption"
                inputClass="create-post-form__input create-post-form__input--caption"
                setState={setCaption}
                value={caption}
                icon={<FontAwesomeIcon className="create-post-form__input-icon" icon={faPenToSquare} />}
            />
            {/* Botones de acción. */}
            <button className="create-post-form__upload-button" onClick={(event) => handleUploadPost(event)}>SUBIR</button>
            <button className="create-post-form__cancel-button" onClick={(event) => handleCancelUpload(event)}>CANCELAR</button>
        </form>
    );
}