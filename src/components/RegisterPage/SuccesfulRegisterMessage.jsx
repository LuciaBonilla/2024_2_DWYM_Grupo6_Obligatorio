// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCircleCheck } from "@fortawesome/free-solid-svg-icons";

/**
 * Modal de error ante un regsitro no exitoso.
 * @param {*} message
 * @param {*} handleHideSuccesfulRegisterMessage
 * @returns Mensaje de error por registro no exitoso.
 * @estado TERMINADO.
 */
function SuccessfulRegisterMessage({ message, handleHideSuccesfulRegisterMessage }) {
    return (
        <div className="successful-register-message">
            <p className="successful-register-message__text">{message}</p>
            <FontAwesomeIcon className="successful-register-message__icon" icon={faPersonCircleCheck} />
            <button className="successful-register-message__hide-button" onClick={() => handleHideSuccesfulRegisterMessage()}>OK</button>
        </div>
    )
}

export default SuccessfulRegisterMessage;