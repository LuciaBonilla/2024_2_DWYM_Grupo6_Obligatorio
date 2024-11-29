import { useState, useEffect } from "react";

// IMAGES.
import logo from "@/assets/logo.png";

// COMPONENTES.
import LoginForm from "@/components/LoginPage/LoginForm";
import GoToPageButton from "@/components/shared/others/GoToPageButton";
import OperationResultModal from "@/components/shared/others/OperationResultModal";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "@/context-providers/AuthContextProvider";

// RUTAS.
import routes from "@/constants/routes";

// ÍCONOS.
import { faPersonCircleXmark } from "@fortawesome/free-solid-svg-icons";

/**
 * Página para el inicio de sesión.
 * @estado componente terminado.
 */
export default function LoginPage() {
    // Indica si el modal de inicio de sesión no exitoso se debe renderizar.
    const [isUnsuccessfulLoginModalShowing, setIsUnsuccessfulLoginModalShowing] = useState(false);

    // Mensaje de modal de inicio de sesión no exitoso.
    const [unsuccessfulLoginMessage, setUnsuccessfulLoginMessage] = useState("");

    /**
     * Muestra el mensaje de inicio de sesión no exitoso.
     */
    function handleShowUnsuccessfulLoginModal() {
        setIsUnsuccessfulLoginModalShowing(true);
    }

    /**
     * Oculta el mensaje de inicio de sesión no exitoso.
     */
    function handleHideUnsuccessfulLoginModal() {
        setIsUnsuccessfulLoginModalShowing(false);
    }

    // Para cerrar sesión.
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
                handleShowUnsuccessfulLoginModal={handleShowUnsuccessfulLoginModal}
                setUnsuccessfulLoginMessage={setUnsuccessfulLoginMessage}
            />

            {/* Botón para ir a la page de registro. */}
            <GoToPageButton
                route={routes.REGISTER_ROUTE}
                textContent="CREAR CUENTA"
                buttonClass="login-page__go-to-register-page-button"
            />

            {/* Modal en caso de login no exitoso. */}
            {isUnsuccessfulLoginModalShowing &&
                <OperationResultModal
                    modalClass="unsuccessful-login-modal"
                    messageClass="unsuccessful-login-modal__message"
                    message={unsuccessfulLoginMessage}
                    iconClass="unsuccessful-login-modal__icon"
                    icon={faPersonCircleXmark}
                    buttonClass="unsuccessful-login-modal__close-modal-button"
                    handleHideOperationResultModal={handleHideUnsuccessfulLoginModal}
                    buttonText="OK"
                />
            }
        </main>
    )
}