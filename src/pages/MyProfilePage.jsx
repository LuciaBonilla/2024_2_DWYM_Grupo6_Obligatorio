import '../styles/mobile/MyProfilePage.css'

import '../styles/desktop/MyProfilePage.css'

import PostsContainer from "../components/MyProfilePage/MyPostContainer";
import Navbar from "../components/shared-components/Navbar";

function MyProfilePage() {
    
    return (
        <main className='my-profile-page'>
            <div><PostsContainer/></div>
            <Navbar />
        </main>
    );

}

export default MyProfilePage;