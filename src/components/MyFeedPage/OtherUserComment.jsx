// COMPONENTES.
import ShortProfileCard from "./ShortProfileCard";

/**
 * El comentario de otro usuario.
 * @param {*} data 
 * @estado TERMINADO.
 */
function OtherUserComment({ data }) {
    return (
        <section className="other-user-comment">
            <ShortProfileCard user={data.user} />
            <p className="other-user-comment__content">{data.content}</p>
            <p className="other-user-comment__created-at">Publicado el: {new Date(data.createdAt).toLocaleDateString(document.documentElement.lang, {
                day: '2-digit',
                month: 'long',  // mes completo, o 'short' para abreviado
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}</p>
        </section>
    );
}

export default OtherUserComment;