import { useNavigate } from "react-router-dom";

/**
 * Botón para redirigir a la página de registro (ruta: /register)
 * @estado TERMINADO.
 */
function GoToRegisterPageButton() {
    /**
     * Para cambiar de ruta.
     */
    const navigate = useNavigate();

    /**
     * Redirige a la ruta "/register".
     */
    function handleGoToRegisterPage() {
        navigate("/register");
    }

    return (
        <button className="login-page__go-to-register-page-button" onClick={() => handleGoToRegisterPage()}>CREAR CUENTA</button>
    );
}

export default GoToRegisterPageButton;