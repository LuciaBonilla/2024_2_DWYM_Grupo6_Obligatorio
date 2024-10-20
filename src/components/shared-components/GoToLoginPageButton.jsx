import { useNavigate } from "react-router-dom"

/**
 * Al apretar redirige a "/login".
 * @param textContent
 * @param buttonClass
 * @estado TERMIANDO.
 */
function GoToLoginPageButton({ textContent, buttonClass }) {
    const navigate = useNavigate();

    function handleGoToLoginPage() {
        navigate("/login");
    }

    return (
        <button className={buttonClass} onClick={() => handleGoToLoginPage()}>{textContent}</button>
    )
}

export default GoToLoginPageButton;