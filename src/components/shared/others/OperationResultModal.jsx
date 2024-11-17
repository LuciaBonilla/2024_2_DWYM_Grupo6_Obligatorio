// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Modal para mostrar resultado de operación.
 * @param {*} modalClass
 * @param {*} messageClass
 * @param {*} message
 * @param {*} iconClass
 * @param {*} icon
 * @param {*} buttonClass
 * @param {*} handleHideOperationResultMessage
 * @param {*} buttonText
 * @estado componente terminado.
 */
function OperationResultModal({ modalClass, messageClass, message, iconClass, icon, buttonClass, handleHideOperationResultModal, buttonText }) {
    return (
        <div className={modalClass}>
            <p className={messageClass}>{message}</p>
            <FontAwesomeIcon className={iconClass} icon={icon} />
            <button className={buttonClass} onClick={() => handleHideOperationResultModal()}>{buttonText}</button>
        </div>
    )
}

export default OperationResultModal;