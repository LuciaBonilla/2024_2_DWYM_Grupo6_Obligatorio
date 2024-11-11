// COMPONENTES.
import Navbar from "../components/shared-components/others/Navbar";
import PostCardContainer from "../components/shared-components/posts/PostCardContainer";

/**
 * My Feed Page.
 * @estado TERMINADO.
 */
function MyFeedPage() {
    return (
        <main className="post-page">
            <h1 className="post-page__social-network-title">PhantyNet</h1>
            <PostCardContainer />
            <Navbar />
        </main>
    );
}

export default MyFeedPage;