// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

/**
 * Modal de error ante un regsitro no exitoso.
 * @param {*} message
 * @param {*} handleHideUnsuccesfulRegisterMessage
 * @returns Mensaje de error por registro no exitoso.
 * @estado TERMINADO.
 */
function UnsuccessfulRegisterMessage({ message, handleHideUnsuccesfulRegisterMessage }) {
    return (
        <div className="unsuccessful-register-message">
            <p className="unsuccessful-register-message__text">{message}</p>
            <FontAwesomeIcon className="unsuccessful-register-message__icon" icon={faCircleExclamation} />
            <button className="unsuccessful-register-message__hide-button" onClick={() => handleHideUnsuccesfulRegisterMessage()}>OK</button>
        </div>
    )
}

export default UnsuccessfulRegisterMessage;