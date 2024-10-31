import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// COMPONENTES.
import Navbar from "../components/shared-components/Navbar";
import OtherUserInfoCard from '../components/OtherUserProfilePage/OtherUserInfoCard';
import OtherUserPostsContainer from '../components/OtherUserProfilePage/OtherUserPostsContainer';

// PROVEEDOR DE CONTEXTO.
import { useAuthContext } from "../context-providers/AuthContextProvider";

// CLASES AUXILIARES.
import BackendCaller from "../auxiliar-classes/BackendCaller";

/**
 * Other User Profile Page.
 * @estado TERMINADO.
 */
function OtherUserProfilePage() {

    // Id del otro usuario cuyo perfil muestro
    const {id} = useParams();

    // Necesarios para obtener los posts y filtrar los posts.
    const { token, userID } = useAuthContext();

    return (
        <main className="other-user-profile-page">
            <div className='other-user-profile-content'>
                <OtherUserInfoCard other_id={id}/>
                <OtherUserPostsContainer userId={id} token={token} />
            </div>
            <Navbar />
        </main>
    );
}

export default OtherUserProfilePage;