import { useEffect, useState } from "react";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// COMPONENTES.
import OtherUserComment from "./OtherUserComment";
import MyComment from "./MyComment";
import CommentSectionForm from "./CommentSectionForm";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../../context-providers/AuthContextProvider";

// CLASES AUXILIARES.
import BackendCaller from "../../auxiliar-classes/BackendCaller";

/**
 * Sección de comentarios.
 * Los comentarios propios van arriba del todo y los de otros usuarios abajo.
 * @param {*} postID 
 * @param {*} commentsIDs
 * @param {*} handleHideCommentSection
 * @param {*} fetchFeed
 */
function CommentSection({ postID, commentsIDs, handleHideCommentSection, fetchFeed }) {
    // Para controlar carga.
    const [loading, setLoading] = useState(true);

    // Necesario para obtener comentarios y filtrar los comentarios propios de los ajenos.
    const { userID, token } = useAuthContext();

    // Comentarios propios y ajenos.
    const [myComments, setMyComments] = useState([]);
    const [otherComments, setOtherComments] = useState([]);

    /**
     * Ordena los comentarios de forma cronológica y los retorna.
     * @param {*} comments
     */
    function sortCommentsByDate(comments) {
        // Ordena los comentarios por fecha de forma descendente (más recientes primero).
        return comments.sort((comment1, comment2) => new Date(comment2.createdAt) - new Date(comment1.createdAt));
    }

    /**
     * Obtiene los comentarios.
     * @param {*} newComment 
     */
    async function fetchCommentsData(newComment = null) {
        await fetchFeed();

        // Crea un array de promesas con las llamadas a la API.
        const commentsPromises = commentsIDs.map(async commentID => {
            const commentResponse = await BackendCaller.getComment(commentID, token);
            return commentResponse.data;
        });

        // Espera que todas las promesas se resuelvan.
        const commentsData = await Promise.all(commentsPromises);

        // Si hay un nuevo comentario, lo agrega a la lista.
        if (newComment) {
            commentsData.push({
                ...newComment,
                user: {_id: newComment.user}
            });
        }

        // Actualiza el estado con los datos obtenidos.
        setMyComments(sortCommentsByDate(commentsData.filter((comment) => comment.user._id === userID)));
        setOtherComments(sortCommentsByDate(commentsData.filter((comment) => comment.user._id !== userID)));
    }

    useEffect(() => {
        fetchCommentsData();
        setLoading(false);
    }, []);

    if (loading) {
        return (<p className="loading-message">CARGANDO...</p>);
    }

    return (
        <section className="comment-section">
            {/* Botón para cerrar la sección. */}
            <button className="comment-section__hide-button" onClick={() => handleHideCommentSection()}><FontAwesomeIcon className="comment-section__hide-icon" icon={faXmark} /></button>

            {/* Título. */}
            <h3 className="comment-section__title">COMENTARIOS</h3>

            <section className="comment_section__container">
                {/* Mis comentarios. */}
                {myComments.length > 0 ? (
                    myComments.map((comment) =>
                        <MyComment
                            key={comment._id}
                            data={comment}
                            fetchFeed={fetchFeed}
                        />
                    )
                ) : (
                    <p className="comment-section__no-comments-message">No has comentado</p>
                )}

                {/* Otros comentarios. */}
                {otherComments.length > 0 ? (
                    otherComments.map((comment) =>
                        <OtherUserComment
                            key={comment._id}
                            data={comment}
                        />
                    )
                ) : (
                    <p className="comment-section__no-comments-message">Otros no han comentado</p>
                )}
            </section>

            {/* Formulario. */}
            <CommentSectionForm
                postID={postID}
                fetchCommentsData={fetchCommentsData}
            />
        </section>
    );
}

export default CommentSection;