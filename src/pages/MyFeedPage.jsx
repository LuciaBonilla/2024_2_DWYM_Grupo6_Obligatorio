// COMPONENTES.
import Navbar from "@/components/shared/others/Navbar";
import PostCardContainer from "@/components/shared/posts/PostCardContainer";

/**
 * My Feed Page.
 * @estado componente terminado.
 */
export default function MyFeedPage() {
    return (
        <main className="post-page">
            <h1 className="post-page__social-network-title">PhantyNet</h1>
            <PostCardContainer />
            <Navbar />
        </main>
    );
}