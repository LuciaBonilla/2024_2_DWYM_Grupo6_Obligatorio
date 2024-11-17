import { useNavigate } from "react-router-dom"

/**
 * Al apretar redirige a "route".
 * @param {*} route
 * @param {*} textContent
 * @param {*} buttonClass
 * @estado componente terminado.
 */
function GoToPageButton({ route, textContent, buttonClass }) {
    const navigate = useNavigate();

    function handleGoToPage() {
        navigate(route);
    }

    return (
        <button className={buttonClass} onClick={() => handleGoToPage()}>{textContent}</button>
    )
}

export default GoToPageButton;