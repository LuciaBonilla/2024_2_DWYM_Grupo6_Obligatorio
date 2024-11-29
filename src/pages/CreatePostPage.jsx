import { useState } from "react";

// COMPONENTES.
import CreatePostForm from "@/components/CreatePostPage/CreatePostForm";
import OperationResultModal from "@/components/shared/others/OperationResultModal";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faFileCircleXmark } from "@fortawesome/free-solid-svg-icons";

/**
 * Create Post Page.
 * @estado componente terminado.
 */
export default function CreatePostPage() {
    // Indica si el mensaje de subida no exitosa se debe renderizar.
    const [isUnsuccessfulUploadModalShowing, setIsUnsuccessfulUploadModalShowing] = useState(false);

    // Mensaje de modal subida no exitosa.
    const [unsuccessfulUploadModalMessage, setUnsuccessfulUploadModalMessage] = useState("");

    /**
     * Muestra el mensaje de subida no exitosa.
     */
    function handleShowUnsuccessfulUploadModal() {
        setIsUnsuccessfulUploadModalShowing(true);
    }

    /**
     * Oculta el mensaje de subida no exitosa.
     */
    function handleHideUnsuccessfulUploadModal() {
        setIsUnsuccessfulUploadModalShowing(false);
    }

    return (
        <main className="create-post-page">
            {/* Título. */}
            <h1 className="create-post-page__title">
                <FontAwesomeIcon className="create-post-page__icon" icon={faCloudArrowUp} />
                <span className="next-to-icon">CREAR POST</span>
            </h1>

            {/* Formulario. */}
            <CreatePostForm
                handleShowUnsuccessfulUploadModal={handleShowUnsuccessfulUploadModal}
                setUnsuccessfulUploadModalMessage={setUnsuccessfulUploadModalMessage}
            />

            {/* Mensaje de subida no exitosa. */}
            {isUnsuccessfulUploadModalShowing &&
                <OperationResultModal
                    modalClass="unsuccessful-upload-modal"
                    messageClass="unsuccessful-upload-modal__message"
                    message={unsuccessfulUploadModalMessage}
                    iconClass="unsuccessful-upload-modal__icon"
                    icon={faFileCircleXmark}
                    buttonClass="unsuccessful-upload-modal__close-modal-button"
                    handleHideOperationResultModal={handleHideUnsuccessfulUploadModal}
                    buttonText="OK"
                />}
        </main>
    );
}