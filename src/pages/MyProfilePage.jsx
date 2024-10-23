import { useAuthContext } from '../context-providers/AuthContextProvider';
import '../styles/mobile/MyProfilePage.css'
import PostsContainer from "../components/MyProfilePage/MyPostContainer";
import Navbar from "../components/shared-components/Navbar";

function MyProfilePage() {
    
    return (
        <div>
            
            <div><PostsContainer/></div>
            <Navbar />
        </div>
    );

}

export default MyProfilePage;