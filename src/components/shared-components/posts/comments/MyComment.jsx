// CLASES AUXILIARES.
import BackendCaller from "../../../../auxiliar-classes/BackendCaller";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../../../../context-providers/AuthContextProvider";

// COMPONENTES.
import ShortProfileCard from "../../profiles/ShortProfileCard";

/**
 * Mi comentario.
 * @param {*} data
 * @param {*} fetchFeed
 * @estado TERMINADO.
 */
function MyComment({ postID, data, fetchCommentsData }) {
    // Necesario para eliminar comentario.
    const { token } = useAuthContext();

    /**
     * Elimina un comentario propio.
     * @estado TERMINADO.
     */
    async function handleDeleteComment() {
        const response = await BackendCaller.deleteComment(postID, data._id, token);
        if (response.statusCode === 200) {
            await fetchCommentsData(null, data._id);
        }
    }

    return (
        <section className="my-comment">
            <ShortProfileCard user={data.user} />
            <p className="my-comment__content">{data.content}</p>
            <p className="my-comment__created-at">Publicado el: {new Date(data.createdAt).toLocaleDateString(document.documentElement.lang, {
                day: '2-digit',
                month: 'long',  // mes completo, o 'short' para abreviado
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}</p>
            <button className="my-comment__delete-button" onClick={() => handleDeleteComment()}>BORRAR COMENTARIO</button>
        </section>
    );
}

export default MyComment;