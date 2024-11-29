import { useState } from "react";

// CLASES AUXILIARES.
import BackendCaller from "@/auxiliar-classes/BackendCaller";

// COMPONENTES.
import NormalInput from "@/components/shared/inputs/NormalInput";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

/**
 * Formulario para el registro.
 * @param {*} handleShowUnsuccessfulRegisterModal - Función para mostrar el modal de registro fallido.
 * @param {*} setUnsuccessfulRegisterModalMessage - Función para establecer el mensaje del modal de registro fallido.
 * @param {*} handleShowSuccessfulRegisterModal - Función para mostrar el modal de registro exitoso.
 * @param {*} setSuccessfulRegisterModalMessage - Función para establecer el mensaje del modal de registro exitoso.
 * @estado Componente terminado.
 */
export default function RegisterForm({
    handleShowUnsuccessfulRegisterModal,
    setUnsuccessfulRegisterModalMessage,
    handleShowSuccessfulRegisterModal,
    setSuccessfulRegisterModalMessage
}) {
    // Valores de los inputs.
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    /**
     * Maneja el registro de un usuario.
     * @param {*} event
     */
    async function handleRegister(event) {
        // Para evitar el submit.
        event.preventDefault();

        if (username === "" || email === "" || password === "" || repeatPassword === "") { // Campos vacíos.
            // Renderiza el mensaje de registro no exitoso.
            setUnsuccessfulRegisterModalMessage("Hay campos vacíos");
            handleShowUnsuccessfulRegisterModal();
        } else if (password !== repeatPassword) { // Contraseñas no coinciden.
            // Renderiza el mensaje de registro no exitoso.
            setUnsuccessfulRegisterModalMessage("Las contraseñas no coinciden");
            handleShowUnsuccessfulRegisterModal();
        } else if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) { // El email no tiene el formato correcto.
            // Renderiza el mensaje de registro no exitoso.
            setUnsuccessfulRegisterModalMessage("No es un email");
            handleShowUnsuccessfulRegisterModal();
        } else {
            // Resultado del register.
            const result = await BackendCaller.register(username, email, password);

            if (result.statusCode !== 201) { // No Created.
                // Renderiza el mensaje de registro no exitoso.
                setUnsuccessfulRegisterModalMessage(result.data.message);
                handleShowUnsuccessfulRegisterModal();
            } else { // Created.
                // Renderiza el mensaje de registro exitoso.
                setSuccessfulRegisterModalMessage(`¡Bienvenido, ${username}!`);
                handleShowSuccessfulRegisterModal();
            }
        }
    }

    return (
        <form className="register-form">
            {/* Email. */}
            <NormalInput
                labelClass="register-form__input-container register-form__input-container--email"
                labelContent="EMAIL"
                inputName="register-email"
                inputClass="register-form__input register-form__input--email"
                inputType="email"
                setState={setEmail}
                value={email}
                icon={<FontAwesomeIcon className="register-form__input-icon" icon={faEnvelope} />}
            />
            {/* Nombre de usuario. */}
            <NormalInput
                labelClass="register-form__input-container register-form__input-container--username"
                labelContent="NOMBRE DE USUARIO"
                inputName="register-username"
                inputClass="register-form__input register-form__input--username"
                inputType="text"
                setState={setUsername}
                value={username}
                icon={<FontAwesomeIcon className="register-form__input-icon" icon={faUser} />}
            />
            {/* Contraseña. */}
            <NormalInput
                labelClass="register-form__input-container register-form__input-container--password"
                labelContent="CONTRASEÑA"
                inputName="register-password"
                inputClass="register-form__input register-form__input--password"
                inputType="password"
                setState={setPassword}
                value={password}
                icon={<FontAwesomeIcon className="register-form__input-icon" icon={faLock} />}
            />
            {/* Repetir contraseña. */}
            <NormalInput
                labelClass="register-form__input-container register-form__input-container--repeat-password"
                labelContent="REPETIR CONTRASEÑA"
                inputName="register-repeat-password"
                inputClass="register-form__input register-form__input--repeat-password"
                inputType="password"
                setState={setRepeatPassword}
                value={repeatPassword}
                icon={<FontAwesomeIcon className="register-form__input-icon" icon={faLock} />}
            />
            <button className="register-form__ok-button" onClick={(event) => handleRegister(event)}>CREAR CUENTA</button>
        </form>
    );
}