// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Modal que muestra el resultado de una operación.
 * @param {*} modalClass - Clase CSS para estilizar el modal.
 * @param {*} messageClass - Clase CSS para estilizar el mensaje dentro del modal.
 * @param {*} message - El contenido del mensaje a mostrar.
 * @param {*} iconClass - Clase CSS para estilizar el ícono.
 * @param {*} icon - Ícono que se muestra en el modal.
 * @param {*} buttonClass - Clase CSS para estilizar el botón.
 * @param {*} handleHideOperationResultModal - Función para ocultar el modal.
 * @param {*} buttonText - Texto que se muestra en el botón.
 * @estado Componente terminado.
 */
export default function OperationResultModal({
    modalClass,
    messageClass, message,
    iconClass,
    icon,
    buttonClass,
    handleHideOperationResultModal,
    buttonText
}) {
    return (
        <div className={modalClass}>
            <p className={messageClass}>{message}</p>
            <FontAwesomeIcon className={iconClass} icon={icon} />
            <button className={buttonClass} onClick={() => handleHideOperationResultModal()}>{buttonText}</button>
        </div>
    )
}