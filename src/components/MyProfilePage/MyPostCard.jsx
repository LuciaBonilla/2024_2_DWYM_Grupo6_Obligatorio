// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../../context-providers/AuthContextProvider";

import '../../styles/mobile/MyProfilePage.css'

function PostCard({ id, user, imageURL, caption, comments, likes, createdAt, fetchFeed }) {


  
    

    const { token } = useAuthContext();

  
    return (
        <article >
            

            {/* Imagen subida. */}
            <img className="instagram-image" src={`http://localhost:3001/${imageURL.replace("\\", "/")}`} onClick={() => handleGoToOtherUserPostPage()} />
        </article>
    );
}

export default PostCard;