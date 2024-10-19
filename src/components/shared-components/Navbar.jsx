import { useNavigate } from "react-router-dom";

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
        <nav>
            <button></button>
        </nav>
    );
}