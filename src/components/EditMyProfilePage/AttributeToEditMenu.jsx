/**
 * Menú para seleccionar un atributo de perfil a editar.
 * @param {*} handleShowEditMyProfileForm
 * @estado componente terminado.
 */
function AttributeToEditMenu({ handleShowEditMyProfileForm }) {
    return (
        <section className="edit-my-profile-menu">
            <button className="edit-my-profile-menu__option-button" onClick={() => handleShowEditMyProfileForm("username")}>EDITAR NOMBRE DE USUARIO</button>
            <button className="edit-my-profile-menu__option-button" onClick={() => handleShowEditMyProfileForm("profilePicture")}>EDITAR FOTO DE PERFIL</button>
        </section>
    )
}

export default AttributeToEditMenu;