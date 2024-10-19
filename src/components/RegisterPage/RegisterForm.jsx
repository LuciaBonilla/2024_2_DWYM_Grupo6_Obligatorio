import { useEffect, useState } from "react";
import { useAsyncError, useNavigate } from "react-router-dom";

// CLASES AUXILIARES.
import BackendCaller from "../../auxiliar-classes/BackendCaller";

// COMPONENTES.
import NormalInput from "../shared-components/NormalInput";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

/**
 * Formulario para el registro.
 * @param {*} handleShowUnsuccessfulRegisterMessage
 * @param {*} setUnsuccessfulRegisterMessageContent
 */
function RegisterForm({ handleShowUnsuccessfulRegisterMessage, setUnsuccessfulRegisterMessageContent }) {
    // Valores de los inputs.
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const navigate = useNavigate();

    /**
     * Maneja el registro de un usuario.
     * @param {*} event 
     */
    async function handleRegister(event) {
        // Para evitar el submit.
        event.preventDefault();

        if (username === "" || email === "" || password === "" || repeatPassword === "") {
            // Renderiza el mensaje de registro no exitoso.
            setUnsuccessfulRegisterMessageContent("Hay campos vacíos");
            handleShowUnsuccessfulRegisterMessage();
        } else if (password == !repeatPassword) {
            // Renderiza el mensaje de registro no exitoso.
            setUnsuccessfulRegisterMessageContent("Las contraseñas no coinciden");
            handleShowUnsuccessfulRegisterMessage();
        } else {
            // Resultado del register.
            const result = await BackendCaller.register(username, email, password);

            if (!result.success) {
                // Renderiza el mensaje de registro no exitoso.
                setUnsuccessfulRegisterMessageContent(result.message);
                handleShowUnsuccessfulRegisterMessage();
            }
        }
    }

    function handleCancelRegister(event) {
        event.preventDefault();

        navigate("/login");
    }

    return (
        <form className="register-form">
            <NormalInput
                labelClass="register-form__input-container register-form__input-container--email"
                labelContent="EMAIL"
                inputName="register-email"
                inputClass="register-form__input register-form__input--email"
                inputType="email"
                setState={setEmail}
                value={email}
                icon={<FontAwesomeIcon icon={faEnvelope} />}
            />
            <NormalInput
                labelClass="register-form__input-container register-form__input-container--username"
                labelContent="NOMBRE DE USUARIO"
                inputName="register-username"
                inputClass="register-form__input register-form__input--username"
                inputType="text"
                setState={setUsername}
                value={username}
                icon={<FontAwesomeIcon icon={faUser} />}
            />
            <NormalInput
                labelClass="register-form__input-container register-form__input-container--password"
                labelContent="CONTRASEÑA"
                inputName="register-password"
                inputClass="register-form__input register-form__input--password"
                inputType="password"
                setState={setPassword}
                value={password}
                icon={<FontAwesomeIcon icon={faLock} />}
            />
            <NormalInput
                labelClass="register-form__input-container register-form__input-container--repeat-password"
                labelContent="REPETIR CONTRASEÑA"
                inputName="register-repeat-password"
                inputClass="register-form__input register-form__input--repeat-password"
                inputType="password"
                setState={setRepeatPassword}
                value={repeatPassword}
                icon={<FontAwesomeIcon icon={faLock} />}
            />

            <RegisterButton handleRegister={handleRegister} />
            <CancelRegisterButton handleCancelRegister={""} />
        </form>
    );
}

export default registerForm;