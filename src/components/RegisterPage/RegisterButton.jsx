/**
 * Al apretarlo hace la acción de register.
 * @param {*} handleRegister
 * @estado TERMINADO.
 */
function RegisterButton({ handleRegister }) {
    return (
        <button className="register-form__ok-button" onClick={(event) => handleRegister(event)}>CREAR CUENTA</button>
    );
}

export default RegisterButton;