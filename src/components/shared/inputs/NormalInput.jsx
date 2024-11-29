/**
 * Input normal de texto.
 * @param {*} labelClass - Clase CSS para estilizar la etiqueta asociada al input.
 * @param {*} labelContent - Contenido de la etiqueta del input (texto visible).
 * @param {*} inputName - Nombre único del input (atributo `name`).
 * @param {*} inputClass - Clase CSS para estilizar el input.
 * @param {*} placeholder - Texto del placeholder mostrado dentro del input.
 * @param {*} setState - Función para actualizar el estado con el archivo seleccionado.
 * @param {*} value - Valor actual del input.
 * @param {*} icon - Ícono que acompaña al input, si aplica.
 * @estado Componente terminado.
 */
export default function NormalInput({ labelClass, labelContent, inputName, inputClass, inputType, placeholder, setState, value, icon }) {
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