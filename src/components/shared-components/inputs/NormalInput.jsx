/**
 * Input normal (no de selection y no de file).
 * @param {*} labelClass 
 * @param {*} labelContent 
 * @param {*} inputName 
 * @param {*} inputClass 
 * @param {*} inputType 
 * @param {*} placeholder 
 * @param {*} setState
 * @param {*} value
 * @estado TERMINADO.
 */
function NormalInput({ labelClass, labelContent, inputName, inputClass, inputType, placeholder, setState, value, icon }) {
    return (
        <label className={labelClass}>
            {labelContent}
            {icon}
            <input
                id={inputName}
                key={inputName}
                name={inputName}
                className={inputClass}
                type={inputType}
                placeholder={placeholder}
                onChange={(event) => setState(event.target.value)}
                value={value}
            />
        </label>
    );
}

export default NormalInput;