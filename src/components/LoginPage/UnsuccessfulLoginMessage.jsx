// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCircleXmark } from "@fortawesome/free-solid-svg-icons";

/**
 * Modal de error ante un inicio de sesión no exitoso.
 * @param {*} message
 * @param {*} handleHideUnsuccesfulLoginMessage
 * @returns Mensaje de error por inicio de sesión no exitoso.
 * @estado TERMINADO.
 */
function UnsuccessfulLoginMessage({ message, handleHideUnsuccesfulLoginMessage }) {
    return (
        <div className="unsuccessful-login-message">
            <p className="unsuccessful-login-message__text">{message}</p>
            <FontAwesomeIcon className="unsuccessful-login-message__icon" icon={faPersonCircleXmark} />
            <button className="unsuccessful-login-message__hide-button" onClick={() => handleHideUnsuccesfulLoginMessage()}>OK</button>
        </div>
    )
}

export default UnsuccessfulLoginMessage;