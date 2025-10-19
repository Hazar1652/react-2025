import DataList from "../components/DataList";

interface PostsPageProps {
    source: "jsonplaceholder" | "dummyjson";
}

const PostsPage: React.FC<PostsPageProps> = ({ source }) => {
    const url =
        source === "jsonplaceholder"
            ? "https://jsonplaceholder.typicode.com/posts"
            : "https://dummyjson.com/posts";

    return (
        <div>
            <h2>Posts from {source}</h2>
            <DataList url={url} />
        </div>
    );
};

export default PostsPage;
