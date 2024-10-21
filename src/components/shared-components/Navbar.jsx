import { useNavigate } from "react-router-dom";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faSquarePlus, faUserLarge } from "@fortawesome/free-solid-svg-icons";

/**
 * Navbar.
 * @estado TERMINADO.
 */
function Navbar() {
    const navigate = useNavigate();

    function handleGoToMyFeedPage() {
        navigate("/myfeed");
    }

    function handleGoToCreatePostPage() {
        navigate("/createpost");
    }

    function handleGoToMyProfilePage() {
        navigate("/myprofile");
    }

    return (
        <nav className="navbar">
            <button className="navbar__go-to-my-feed-page-button"><FontAwesomeIcon className="navbar__icon" icon={faHouseChimney} onClick={() => handleGoToMyFeedPage()} /></button>
            <button className="navbar__go-to-create-post-page-button"><FontAwesomeIcon className="navbar__icon" icon={faSquarePlus} onClick={() => handleGoToCreatePostPage()} /></button>
            <button className="navbar__go-to-my-profile-page-button"><FontAwesomeIcon className="navbar__icon" icon={faUserLarge} onClick={() => handleGoToMyProfilePage()} /></button>
        </nav>
    );
}

export default Navbar;