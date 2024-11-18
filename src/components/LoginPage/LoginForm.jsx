import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// ÍCONOS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

// COMPONENTES.
import NormalInput from "../shared/inputs/NormalInput";

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../../context-providers/AuthContextProvider";

// RUTAS.
import routes from "../../constants/routes";

/**
 * Formulario para el inicio de sesión.
 * @param {*} handleShowUnsuccessfulLoginModal
 * @param {*} setUnsuccessfulLoginMessage
 * @estado componente terminado.
 */
function LoginForm({ handleShowUnsuccessfulLoginModal, setUnsuccessfulLoginMessage }) {
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
     * @estado función terminada.
     */
    async function handleLogin(event) {
        // Para evitar el submit.
        event.preventDefault();

        // Resultado del login.
        const result = await login(email, password);

        if (!result.success) {
            // Renderiza el mensaje de inicio de sesión no exitoso.
            setUnsuccessfulLoginMessage(result.message);
            handleShowUnsuccessfulLoginModal();
        }
    }

    useEffect(() => {
        // Va a "MY_FEED_ROUTE" si está autorizado.
        if (isAuthorizated === true) {
            navigate(routes.MY_FEED_ROUTE);
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
            <button className="login-form__ok-button" onClick={(event) => handleLogin(event)}>INICIAR SESIÓN</button>
        </form>
    );
}

export default LoginForm;