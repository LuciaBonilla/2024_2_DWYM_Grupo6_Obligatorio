import { useState, useEffect } from "react";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faPersonCircleXmark, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

// COMPONENTES.
import RegisterForm from "@/components/RegisterPage/RegisterForm";
import GoToPageButton from "@/components/shared/others/GoToPageButton";
import OperationResultModal from "@/components/shared/others/OperationResultModal";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "@/context-providers/AuthContextProvider";

// RUTAS.
import routes from "@/constants/routes";

/**
 * Página de registro.
 * @estado componente terminado.
 */
export default function RegisterPage() {
    // Indica si el modal de registro no exitoso se debe renderizar.
    const [isUnsuccessfulRegisterModalShowing, setIsUnsuccessfulRegisterModalShowing] = useState(false);

    // Indica si el modal de registro exitoso se debe renderizar.
    const [isSuccessfulRegisterModalShowing, setIsSuccessfulRegisterModalShowing] = useState(false);

    // Mensaje de modal de registro no exitoso.
    const [unsuccessfulRegisterModalMessage, setUnsuccessfulRegisterModalMessage] = useState("");

    // Mensaje de modal de registro exitoso.
    const [successfulRegisterModalMessage, setSuccessfulRegisterModalMessage] = useState("");

    /**
     * Muestra el modal de registro no exitoso.
     */
    function handleShowUnsuccessfulRegisterModal() {
        setIsUnsuccessfulRegisterModalShowing(true);
    }

    /**
     * Oculta el modal de registro no exitoso.
     */
    function handleHideUnsuccessfulRegisterModal() {
        setIsUnsuccessfulRegisterModalShowing(false);
    }

    /**
     * Muestra el modal de registro exitoso.
     */
    function handleShowSuccessfulRegisterModal() {
        setIsSuccessfulRegisterModalShowing(true);
    }

    /**
     * Oculta el modal de registro exitoso.
     */
    function handleHideSuccessfulRegisterModal() {
        setIsSuccessfulRegisterModalShowing(false);
    }

    // Para cerrar sesión.
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
                handleShowUnsuccessfulRegisterModal={handleShowUnsuccessfulRegisterModal}
                setUnsuccessfulRegisterModalMessage={setUnsuccessfulRegisterModalMessage}
                handleShowSuccessfulRegisterModal={handleShowSuccessfulRegisterModal}
                setSuccessfulRegisterModalMessage={setSuccessfulRegisterModalMessage}
            />

            {/* Botón para ir a la page de login. */}
            <GoToPageButton
                route={routes.LOGIN_ROUTE}
                textContent="INICIAR SESIÓN"
                buttonClass="register-form__cancel-register-button"
            />

            {/* Modal en caso de registro no exitoso. */}
            {isUnsuccessfulRegisterModalShowing &&
                <OperationResultModal
                    modalClass="unsuccessful-register-modal"
                    messageClass="unsuccessful-register-modal__message"
                    message={unsuccessfulRegisterModalMessage}
                    iconClass="unsuccessful-register-modal__icon"
                    icon={faPersonCircleXmark}
                    buttonClass="unsuccessful-register-modal__close-modal-button"
                    handleHideOperationResultModal={handleHideUnsuccessfulRegisterModal}
                    buttonText="OK"
                />
            }

            {/* Modal en caso de registro exitoso. */}
            {isSuccessfulRegisterModalShowing &&
                <OperationResultModal
                    modalClass="successful-register-modal"
                    messageClass="successful-register-modal__message"
                    message={successfulRegisterModalMessage}
                    iconClass="successful-register-modal__icon"
                    icon={faCircleCheck}
                    buttonClass="successful-register-modal__close-modal-button"
                    handleHideOperationResultModal={handleHideSuccessfulRegisterModal}
                    buttonText="OK"
                />
            }
        </main>
    )
}