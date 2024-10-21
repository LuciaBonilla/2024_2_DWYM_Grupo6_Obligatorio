// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// COMPONENTES.
import Comment from "./Comment";

function CommentSection({ comments, handleHideCommentSection, fetchFeed }) {
    return (
        <section className="comment-section">
            <button className="comment-section__hide-button" onClick={() => handleHideCommentSection()}><FontAwesomeIcon className="comment-section__hide-icon" icon={faXmark} /></button>
            <h3 className="comment-section__title">COMENTARIOS</h3>
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <Comment
                        key={comment}
                        id={comment}
                    />
                ))
            ) : (
                <p className="comment-section__no-comments-message">Sé el primero en comentar</p>
            )}
        </section>
    );
}

export default CommentSection;