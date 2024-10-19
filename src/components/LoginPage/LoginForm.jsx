import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

// COMPONENTES.
import NormalInput from "../shared-components/NormalInput";
import LoginButton from "./LoginButton";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../../context-providers/AuthContextProvider";

/**
 * Formulario para el inicio de sesión.
 * @param {*} handleShowUnsuccessfulLoginMessage
 * @param {*} setUnsuccessfulLoginMessageContent
 * @estado TERMINADO.
 */
function LoginForm({ handleShowUnsuccessfulLoginMessage, setUnsuccessfulLoginMessageContent }) {
    // Para cambiar de ruta.
    const navigate = useNavigate();

    // Iniciar sesión e indicador de que si el usuario está autorizado.
    const { login, isAuthorizated } = useAuthContext();

    // Valores de los inputs.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    /**
     * Maneja el inicio de sesión de un usuario.
     * @param {*} event 
     */
    async function handleLogin(event) {
        // Para evitar el submit.
        event.preventDefault();

        // Resultado del login.
        const result = await login(email, password);

        if (!result.success) {
            // Renderiza el mensaje de inicio de sesión no exitoso.
            setUnsuccessfulLoginMessageContent(result.message);
            handleShowUnsuccessfulLoginMessage();
        }
    }

    useEffect(() => {
        // Va a "/myfeed" si está autorizado.
        if (isAuthorizated === true) {
            navigate("/myfeed");
        }
    }, [isAuthorizated])

    return (
        <form className="login-form">
            <NormalInput
                labelClass="login-form__input-container login-form__input-container--email"
                labelContent="EMAIL"
                inputName="login-email"
                inputClass="login-form__input login-form__input--email"
                inputType="email"
                setState={setEmail}
                value={email}
                icon={<FontAwesomeIcon className="login-form__input-icon" icon={faEnvelope} />}
            />
            <NormalInput
                labelClass="login-form__input-container login-form__input-container--password"
                labelContent="CONTRASEÑA"
                inputName="login-password"
                inputClass="login-form__input login-form__input--password"
                inputType="password"
                setState={setPassword}
                value={password}
                icon={<FontAwesomeIcon className="login-form__input-icon" icon={faLock} />}
            />
            <LoginButton handleLogin={handleLogin} />
        </form>
    );
}

export default LoginForm;