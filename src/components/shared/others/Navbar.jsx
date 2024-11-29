import { useNavigate } from "react-router-dom";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faSquarePlus, faUserLarge } from "@fortawesome/free-solid-svg-icons";

// RUTAS.
import routes from "@/constants/routes";

/**
 * Navbar.
 * @estado componente terminado.
 */
export default function Navbar() {
    const navigate = useNavigate();

    function handleGoToMyFeedPage() {
        navigate(routes.MY_FEED_ROUTE);
    }

    function handleGoToCreatePostPage() {
        navigate(routes.CREATE_POST_ROUTE);
    }

    function handleGoToMyProfilePage() {
        navigate(routes.MY_PROFILE_ROUTE);
    }

    return (
        <nav className="navbar">
            <button className="navbar__go-to-my-feed-page-button"
                onClick={() => handleGoToMyFeedPage()}>
                <FontAwesomeIcon className="navbar__icon" icon={faHouseChimney} />
                <span className="navbar__text next-to-icon">MI FEED</span>
            </button>
            <button className="navbar__go-to-create-post-page-button"
                onClick={() => handleGoToCreatePostPage()}>
                <FontAwesomeIcon className="navbar__icon" icon={faSquarePlus} />
                <span className="navbar__text next-to-icon">CREAR POST</span>
            </button>
            <button className="navbar__go-to-my-profile-page-button"
                onClick={() => handleGoToMyProfilePage()}>
                <FontAwesomeIcon className="navbar__icon" icon={faUserLarge} />
                <span className="navbar__text next-to-icon">MI PERFIL</span>
            </button>
        </nav>
    );
}