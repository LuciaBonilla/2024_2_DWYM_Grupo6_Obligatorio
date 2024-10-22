import { useState } from "react";

// COMPONENTES.
import CreatePostForm from "../components/CreatePostPage/CreatePostForm";
import UnsuccesfulUploadPostMessage from "../components/CreatePostPage/UnsuccessfulUploadMessage";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

/**
 * Create Post Page.
 * @estado TERMINADO.
 */
function CreatePostPage() {
    // Indica si el mensaje de subida no exitosa se debe renderizar.
    const [isUnsuccessfulUploadMessageShowing, setIsUnsuccessfulUploadMessageShowing] = useState(false);

    // Contenido de mensaje de subida no exitosa.
    const [unsuccessfulUploadMessageContent, setUnsuccessfulUploadMessageContent] = useState("");

    /**
     * Muestra el mensaje de subida no exitosa.
     */
    function handleShowUnsuccessfulUploadMessage() {
        setIsUnsuccessfulUploadMessageShowing(true);
    }

    /**
     * Oculta el mensaje de subida no exitosa.
     */
    function handleHideUnsuccessfulUploadMessage() {
        setIsUnsuccessfulUploadMessageShowing(false);
    }

    return (
        <main className="create-post-page">
            {/* Título. */}
            <h1 className="create-post-page__title"><FontAwesomeIcon className="create-post-page__icon" icon={faCloudArrowUp} /><span className="next-to-icon">CREAR POST</span></h1>

            {/* Formulario. */}
            <CreatePostForm
                handleShowUnsuccessfulUploadMessage={handleShowUnsuccessfulUploadMessage}
                setUnsuccessfulUploadMessageContent={setUnsuccessfulUploadMessageContent}
            />

            {/* Mensaje de subida no exitosa. */}
            {isUnsuccessfulUploadMessageShowing &&
                <UnsuccesfulUploadPostMessage
                    handleHideUnsuccessfulUploadMessage={handleHideUnsuccessfulUploadMessage}
                    unsuccessfulUploadMessageContent={unsuccessfulUploadMessageContent}
                />}
        </main>
    );
}

export default CreatePostPage;