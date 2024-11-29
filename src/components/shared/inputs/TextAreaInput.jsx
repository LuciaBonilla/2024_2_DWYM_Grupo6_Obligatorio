/**
 * Input de área de texto, utilizado para permitir la entrada de múltiples líneas de texto.
 * @param {*} labelClass - Clase CSS para estilizar la etiqueta del input.
 * @param {*} labelContent - Contenido de la etiqueta que se muestra junto al input (texto visible).
 * @param {*} inputName - Nombre único del input (atributo `name`).
 * @param {*} inputClass - Clase CSS para estilizar el área de texto.
 * @param {*} placeholder - Texto de marcador de posición que se muestra cuando el área de texto está vacía.
 * @param {*} setState - Función para actualizar el estado con el contenido del área de texto.
 * @param {*} value - Valor actual del área de texto.
 * @param {*} icon - Ícono opcional que se muestra junto al input.
 * @estado Componente terminado.
 */
export default function TextAreaInput({
    labelClass,
    labelContent,
    inputName,
    inputClass,
    placeholder,
    setState,
    value,
    icon
}) {
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