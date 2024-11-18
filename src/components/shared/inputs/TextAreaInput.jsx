/**
 * Input text area.
 * @param {*} labelClass 
 * @param {*} labelContent 
 * @param {*} inputName 
 * @param {*} inputClass 
 * @param {*} inputType 
 * @param {*} placeholder 
 * @param {*} setState
 * @param {*} value
 * @param {*} icon
 * @estado componente terminado.
 */
function TextAreaInput({ labelClass, labelContent, inputName, inputClass, placeholder, setState, value, icon }) {
    return (
        <label className={labelClass}>
            {labelContent}
            {icon}
            <textarea
                id={inputName}
                key={inputName}
                name={inputName}
                className={inputClass}
                placeholder={placeholder}
                onChange={(event) => setState(event.target.value)}
                value={value}
            >
            </textarea>
        </label>
    );
}

export default TextAreaInput;