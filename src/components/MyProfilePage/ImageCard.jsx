import { useNavigate } from "react-router-dom";

// RUTAS.
import routes from "../../constants/routes";

function ImageCard({ postID, postCaption, imageURL }) {
    const navigate = useNavigate();

    function handleGoToMyPostPage() {
        navigate(routes.MY_POSTS_ROUTE.replace(":id", postID));
    }

    return (
        <img
            className="image-card"
            src={imageURL} onClick={() => handleGoToMyPostPage()}
            alt={postCaption}
            title={postCaption}
        />
    );
}

export default ImageCard;