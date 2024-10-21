/**
 * Botón para mostrar la sección de comentarios.
 * @param handleShowCommentSection
 * @estado TERMINADO.
 */
function OpenCommentSectionButton({ handleShowCommentSection }) {
    return (
        <button className="post-card__show-comment-section-button" onClick={() => handleShowCommentSection()}>VER COMENTARIOS</button>
    );
}

export default OpenCommentSectionButton;