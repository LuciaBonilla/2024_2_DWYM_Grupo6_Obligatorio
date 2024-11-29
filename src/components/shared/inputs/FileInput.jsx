/**
 * Input de archivo (file), diseñado para subir archivos específicos. 
 * No incluye funcionalidad de selección avanzada ni comportamientos personalizados.
 * @param {*} labelClass - Clase CSS para estilizar la etiqueta asociada al input.
 * @param {*} labelContent - Contenido de la etiqueta del input (texto visible).
 * @param {*} inputName - Nombre único del input (atributo `name`).
 * @param {*} inputClass - Clase CSS para estilizar el input.
 * @param {*} placeholder - Texto del placeholder mostrado dentro del input.
 * @param {*} setState - Función para actualizar el estado con el archivo seleccionado.
 * @param {*} accept - Tipos de archivo permitidos para la carga (por ejemplo, "image/*").
 * @param {*} icon - Ícono que acompaña al input, si aplica.
 * @estado Componente terminado.
 */
export default function FileInput({
    labelClass,
    labelContent,
    inputName,
    inputClass,
    placeholder,
    setState,
    accept,
    icon
}) {
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