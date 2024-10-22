// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCircleXmark } from "@fortawesome/free-solid-svg-icons";

/**
 * Mensaje de subida no exitosa.
 * @param handleHideUnsuccessfulUploadMessage
 * @param unsuccessfulUploadMessageContent
 * @estado TERMINADO.
 */
function UnsuccesfulUploadPostMessage({ handleHideUnsuccessfulUploadMessage, unsuccessfulUploadMessageContent }) {
    return (
        <div className="unsuccesful-upload-message">
            <p className="unsuccesful-upload-message__text">{unsuccessfulUploadMessageContent}</p>
            <FontAwesomeIcon className="unsuccesful-upload-message__icon" icon={faFileCircleXmark} />
            <button className="unsuccesful-upload-message__hide-button" onClick={() => handleHideUnsuccessfulUploadMessage()}>OK</button>
        </div>
    )
}

export default UnsuccesfulUploadPostMessage;