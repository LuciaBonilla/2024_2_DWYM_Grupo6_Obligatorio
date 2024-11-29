import { useNavigate } from "react-router-dom"

/**
 * Botón que redirige a una página especificada al hacer clic.
 * @param {*} route - La ruta a la que se debe redirigir al hacer clic.
 * @param {*} textContent - El texto que se muestra en el botón.
 * @param {*} buttonClass - Clase CSS para estilizar el botón.
 * @estado Componente terminado.
 */
export default function GoToPageButton({
    route,
    textContent,
    buttonClass
}) {
    const navigate = useNavigate();

    function handleGoToPage() {
        navigate(route);
    }

    return (
        <button className={buttonClass} onClick={() => handleGoToPage()}>{textContent}</button>
    )
}