import DataList from "../components/DataList";

interface UsersPageProps {
    source: "jsonplaceholder" | "dummyjson";
}

const UsersPage: React.FC<UsersPageProps> = ({ source }) => {
    const url =
        source === "jsonplaceholder"
            ? "https://jsonplaceholder.typicode.com/users"
            : "https://dummyjson.com/users";

    return (
        <div>
            <h2>Users from {source}</h2>
            <DataList url={url} />
        </div>
    );
};

export default UsersPage;
