import React from "react";
import DataList from "../components/DataList";

interface CommentsPageProps {
    source: "jsonplaceholder" | "dummyjson";
}

const CommentsPage: React.FC<CommentsPageProps> = ({ source }) => {
    const BASE_JSON = (import.meta.env.VITE_BASE_JSON_URL as string) || "https://jsonplaceholder.typicode.com";
    const BASE_DUMMY = (import.meta.env.VITE_BASE_DUMMY_URL as string) || "https://dummyjson.com";

    const url =
        source === "jsonplaceholder"
            ? `${BASE_JSON}/comments`
            : `${BASE_DUMMY}/comments`;

    return (
        <div>
            <h2>Comments from {source}</h2>
            <DataList url={url} />
        </div>
    );
};

export default CommentsPage;
