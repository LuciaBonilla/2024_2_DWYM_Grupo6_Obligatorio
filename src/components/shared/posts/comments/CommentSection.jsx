import { useEffect, useState } from "react";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// COMPONENTES.
import OtherUserComment from "./OtherUserComment";
import MyComment from "./MyComment";
import CommentSectionForm from "./CommentSectionForm";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../../../../context-providers/AuthContextProvider";

/**
 * Sección de comentarios.
 * Los comentarios propios van arriba del todo y los de otros usuarios abajo.
 * @param {*} postID 
 * @param {*} commentsIDs
 * @param {*} handleHideCommentSection
 * @param {*} fetchFeed
 * @estado componente terminado.
 */
function CommentSection({ postID, comments, handleHideCommentSection, fetchFeed }) {
    // Para controlar carga.
    const [loading, setLoading] = useState(true);

    // Necesario para obtener comentarios y filtrar los comentarios propios de los ajenos.
    const { userID } = useAuthContext();

    // Comentarios propios y ajenos.
    const [myComments, setMyComments] = useState([]);
    const [otherComments, setOtherComments] = useState([]);

    /**
     * Ordena los comentarios de forma cronológica y los retorna.
     * @param {*} comments
     * @estado función terminada.
     */
    function sortCommentsByDate(comments) {
        // Ordena los comentarios por fecha de forma descendente (más recientes primero).
        return comments.sort((comment1, comment2) => new Date(comment2.createdAt) - new Date(comment1.createdAt));
    }

    /**
     * Obtiene los comentarios.
     * Problema: Agregar comentarios o eliminarlos no se renderizará si se hace un fetch.
     * El estado actual de los comentarios aparecerá si se cierra y abre la sección de comentarios.
     * Solución: Para poner el estado de los comentarios en tiempo real sin cerrar la sección de comentarios,
     * se actualiza de forma local (dentro del componente).
     * 
     * @param {*} newComment
     * @param {*} commentToDeleteID
     * @estado función terminada.
     */
    async function fetchCommentsData(newComment = null, commentToDeleteID = null) {
        // Actualiza el feed de los posts.
        await fetchFeed();

        // Actualiza el estado con los datos obtenidos.
        setMyComments(sortCommentsByDate(comments.filter((comment) => comment.user._id === userID)));
        setOtherComments(sortCommentsByDate(comments.filter((comment) => comment.user._id !== userID)));

        // Agrega el nuevo comentario si existe.
        if (newComment) {
            setMyComments((prevComments) =>
                sortCommentsByDate([...prevComments, newComment])
            );
        }

        // Elimina el comentario si se proporciona un ID para borrar.
        if (commentToDeleteID) {
            setMyComments((prevComments) =>
                prevComments.filter((myComment) => myComment._id !== commentToDeleteID)
            );
        }
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

            {comments ?
                <>
                    <section className="comment_section__container">
                        {/* Mis comentarios. */}
                        {myComments.length > 0 ? (
                            myComments.map((comment) =>
                                <MyComment
                                    key={comment._id}
                                    postID={postID} // Necesario para borrar comentario.
                                    data={comment}
                                    fetchCommentsData={fetchCommentsData} // Necesario para borrar comentario.
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
                </> : null
            }

            {/* Formulario. */}
            <CommentSectionForm
                postID={postID} // Necesario para crear comentario.
                fetchCommentsData={fetchCommentsData} // Necesario para crear comentario.
            />
        </section>
    );
}

export default CommentSection;