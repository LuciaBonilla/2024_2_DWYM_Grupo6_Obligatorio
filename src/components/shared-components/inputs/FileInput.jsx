/**
 * Input de file (no de selection y no normal).
 * @param {*} labelClass 
 * @param {*} labelContent 
 * @param {*} inputName 
 * @param {*} inputClass
 * @param {*} placeholder 
 * @param {*} setState
 * @param {*} accept
 * @param {*} icon
 * @estado TERMINADO.
 */
function FileInput({ labelClass, labelContent, inputName, inputClass, placeholder, setState, accept, icon }) {
    return (
        <label className={labelClass}>
            {labelContent}
            {icon}
            <input
                id={inputName}
                key={inputName}
                name={inputName}
                className={inputClass}
                type="file"
                placeholder={placeholder}
                onChange={(e) => setState(e.target.files[0])}
                accept={accept}
            />
        </label>
    );
}

export default FileInput;