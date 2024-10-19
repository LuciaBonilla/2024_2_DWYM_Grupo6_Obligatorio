import { useState } from "react";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

/**
 * Página de registro.
 * @estado EN PROCESO.
 */
function RegisterPage() {
    // Indica si el mensaje de registro no exitoso se debe renderizar.
    const [isUnsuccessfulRegisterMessageShowing, setIsUnsuccessfulRegisterMessageShowing] = useState(false);

    // Contenido de mensaje de registro no exitoso.
    const [unsuccessfulRegisterMessageContent, setUnsuccessfulRegisterMessageContent] = useState("");

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

    const { logout } = useAuthContext();

    useEffect(() => {
        // Cada vez que se renderiza esta page, entonces se cierra la sesión.
        logout();
    }, []);

    return (
        <main className="register-page">
            {/* Título. */}
            <h1 className="register-page__title"><FontAwesomeIcon icon={faUserPlus} />CREAR CUENTA</h1>

            {/* Formulario de registro. */}
            <RegisterForm
                handleShowUnsuccessfulLoginMessage={handleShowUnsuccessfulRegisterMessage}
                setUnsuccessfulLoginMessageContent={setUnsuccessfulRegisterMessageContent}
            />

            {/* Botón para ir a la page de registro. */}
            <GoToLoginPageButton
                textContent="CANCELAR"
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