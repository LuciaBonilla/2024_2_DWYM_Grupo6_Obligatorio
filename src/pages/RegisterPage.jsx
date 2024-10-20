import { useState, useEffect } from "react";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

// COMPONENTES.
import RegisterForm from "../components/RegisterPage/RegisterForm";
import GoToLoginPageButton from "../components/shared-components/GoToLoginPageButton";
import UnsuccessfulRegisterMessage from "../components/RegisterPage/UnsuccessfulRegisterMessage";
import SuccessfulRegisterMessage from "../components/RegisterPage/SuccesfulRegisterMessage";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../context-providers/AuthContextProvider";

/**
 * Página de registro.
 * @estado TERMINADO.
 */
function RegisterPage() {
    // Indica si el mensaje de registro no exitoso se debe renderizar.
    const [isUnsuccessfulRegisterMessageShowing, setIsUnsuccessfulRegisterMessageShowing] = useState(false);

    // Indica si el mensaje de registro exitoso se debe renderizar.
    const [isSuccessfulRegisterMessageShowing, setIsSuccessfulRegisterMessageShowing] = useState(false);

    // Contenido de mensaje de registro no exitoso.
    const [unsuccessfulRegisterMessageContent, setUnsuccessfulRegisterMessageContent] = useState("");

    // Contenido de mensaje de registro exitoso.
    const [successfulRegisterMessageContent, setSuccessfulRegisterMessageContent] = useState("");

    /**
     * Muestra el mensaje de inicio de sesión no exitoso.
     */
    function handleShowUnsuccessfulRegisterMessage() {
        setIsUnsuccessfulRegisterMessageShowing(true);
    }

    /**
     * Oculta el mensaje de inicio de sesión no exitoso.
     */
    function handleHideUnsuccessfulRegisterMessage() {
        setIsUnsuccessfulRegisterMessageShowing(false);
    }

    /**
     * Muestra el mensaje de inicio de sesión exitoso.
     */
    function handleShowSuccessfulRegisterMessage() {
        setIsSuccessfulRegisterMessageShowing(true);
    }

    /**
     * Oculta el mensaje de inicio de sesión exitoso.
     */
    function handleHideSuccessfulRegisterMessage() {
        setIsSuccessfulRegisterMessageShowing(false);
    }

    const { logout } = useAuthContext();

    useEffect(() => {
        // Cada vez que se renderiza esta page, entonces se cierra la sesión.
        logout();
    }, []);

    return (
        <main className="register-page">
            {/* Título. */}
            <h1 className="register-page__title"><FontAwesomeIcon className="register-page__icon" icon={faUserPlus} /><span className="next-to-icon">CREAR CUENTA</span></h1>

            {/* Formulario de registro. */}
            <RegisterForm
                handleShowUnsuccessfulRegisterMessage={handleShowUnsuccessfulRegisterMessage}
                setUnsuccessfulRegisterMessageContent={setUnsuccessfulRegisterMessageContent}
                handleShowSuccessfulRegisterMessage={handleShowSuccessfulRegisterMessage}
                setSuccessfulRegisterMessageContent={setSuccessfulRegisterMessageContent}
            />

            {/* Botón para ir a la page de registro. */}
            <GoToLoginPageButton
                textContent="INICIAR SESIÓN"
                buttonClass="register-form__cancel-register-button"
            />

            {/* Mensaje en caso de login no exitoso. */}
            {isUnsuccessfulRegisterMessageShowing &&
                <UnsuccessfulRegisterMessage
                    message={unsuccessfulRegisterMessageContent}
                    handleHideUnsuccesfulRegisterMessage={handleHideUnsuccessfulRegisterMessage}
                />
            }

            {/* Mensaje en caso de login exitoso. */}
            {isSuccessfulRegisterMessageShowing &&
                <SuccessfulRegisterMessage
                    message={successfulRegisterMessageContent}
                    handleHideSuccesfulRegisterMessage={handleHideSuccessfulRegisterMessage}
                />
            }
        </main>
    )
}

export default RegisterPage;