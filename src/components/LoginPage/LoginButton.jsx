/**
 * Al apretarlo hace la acción de login.
 * @param {*} handleLogin
 * @estado TERMINADO.
 */
function LoginButton({ handleLogin }) {
    return (
        <button className="login-form__ok-button" onClick={(event) => handleLogin(event)}>INICIAR SESIÓN</button>
    );
}

export default LoginButton;