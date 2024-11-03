import { useEffect, useState } from "react";

// COMPONENTES.
import NormalInput from "../shared-components/NormalInput";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

// CLASES AUXILIARES.
import BackendCaller from "../../auxiliar-classes/BackendCaller";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../../context-providers/AuthContextProvider";

/**
 * Formulario para crear comentario.
 * @param {*} postID
 * @param {*} fetchCommentsData
 * @returns 
 */
function CommentSectionForm({ postID, fetchCommentsData }) {
    const [content, setContent] = useState("");

    const { token } = useAuthContext();

    /**
     * Crea un comentario.
     * @param {*} event 
     */
    async function handleCreateComment(event) {
        event.preventDefault();

        const response = await BackendCaller.createComment(content, postID, token);
        if (response.statusCode === 201) {
            const newComment = response.data;

            // Actualiza los comentarios locales.
            await fetchCommentsData(newComment);
            setContent(""); // Limpia el campo de texto.
        }
    }

    return (
        <form className="comment-section-form">
            <NormalInput
                labelClass="comment-section-form__input-container comment-section-form__input-container--content"
                inputName="comment-content"
                inputClass="comment-section-form__input comment-section-form__input--content"
                inputType="text"
                placeholder="ESCRIBE AQUÍ..."
                setState={setContent}
                value={content}
                icon={<FontAwesomeIcon className="comment-section-form__input-icon" icon={faComment} />}
            />

            <button className="comment-section-form__ok-button" onClick={(event) => handleCreateComment(event)}>OK</button>
        </form>
    )
}

export default CommentSectionForm;