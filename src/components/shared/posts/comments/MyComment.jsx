// CLASES AUXILIARES.
import BackendCaller from "@/auxiliar-classes/BackendCaller";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "@/context-providers/AuthContextProvider";

// COMPONENTES.
import ShortProfileCard from "@/components/shared/profiles/ShortProfileCard";

/**
 * Componente para mostrar y gestionar un comentario propio en un post.
 * @param {*} postID - ID del post al que pertenece el comentario.
 * @param {*} data - Información del comentario.
 * @param {*} fetchCommentsData - Función para actualizar los comentarios después de realizar cambios.
 * @estado Componente terminado.
 */
export default function MyComment({
    postID,
    data,
    fetchCommentsData
}) {
    // Necesario para eliminar comentario.
    const { token } = useAuthContext();

    /**
     * Elimina un comentario propio.
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