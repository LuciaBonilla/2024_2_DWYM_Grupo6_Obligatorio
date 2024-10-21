// COMPONENTES.
import Navbar from "../components/shared-components/Navbar";
import PostCardContainer from "../components/MyFeedPage/PostCardContainer";

/**
 * My Feed Page.
 * @estado TERMINADO.
 */
function MyFeedPage() {
    return (
        <main className="my-feed-page">
            <h1 className="my-feed-page__social-network-title">PhantyNet</h1>
            <PostCardContainer />
            <Navbar />
        </main>
    );
}

export default MyFeedPage;