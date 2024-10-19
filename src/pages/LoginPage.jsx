import { useState, useEffect } from "react";

// IMAGES.
import logo from "../assets/logo.png";

// COMPONENTES.
import LoginForm from "../components/LoginPage/LoginForm";
import GoToRegisterPageButton from "../components/LoginPage/GoToRegisterPageButton";
import UnsuccessfulLoginMessage from "../components/LoginPage/UnsuccessfulLoginMessage";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../context-providers/AuthContextProvider";

/**
 * Página para el inicio de sesión.
 * @estado TERMINADO.
 */
function LoginPage() {
    // Indica si el mensaje de inicio de sesión no exitoso se debe renderizar.
    const [isUnsuccessfulLoginMessageShowing, setIsUnsuccessfulLoginMessageShowing] = useState(false);

    // Contenido de mensaje de inicio de sesión no exitoso.
    const [unsuccessfulLoginMessageContent, setUnsuccessfulLoginMessageContent] = useState("");

    /**
     * Muestra el mensaje de inicio de sesión no exitoso.
     */
    function handleShowUnsuccessfulLoginMessage() {
        setIsUnsuccessfulLoginMessageShowing(true);
    }

    /**
     * Oculta el mensaje de inicio de sesión no exitoso.
     */
    function handleHideUnsuccessfulLoginMessage() {
        setIsUnsuccessfulLoginMessageShowing(false);
    }

    const { logout } = useAuthContext();

    useEffect(() => {
        // Cada vez que se renderiza esta page, entonces se cierra la sesión.
        logout();
    }, []);

    return (
        <main className="login-page">
            {/* Logo de la red social. */}
            <img className="login-page__logo" src={logo} />

            {/* Nombre de la red social. */}
            <h1 className="login-page__social-network-title">PhantyNet</h1>

            {/* Formulario de login. */}
            <LoginForm
                handleShowUnsuccessfulLoginMessage={handleShowUnsuccessfulLoginMessage}
                setUnsuccessfulLoginMessageContent={setUnsuccessfulLoginMessageContent}
            />

            {/* Botón para ir a la page de resgistro. */}
            <GoToRegisterPageButton />

            {/* Mensaje en caso de login no exitoso. */}
            {isUnsuccessfulLoginMessageShowing &&
                <UnsuccessfulLoginMessage
                    message={unsuccessfulLoginMessageContent}
                    handleHideUnsuccesfulLoginMessage={handleHideUnsuccessfulLoginMessage}
                />
            }
        </main>
    )
}

export default LoginPage;