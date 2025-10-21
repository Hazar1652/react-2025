import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { User, Post, Comment } from "../types";

type DataType = "users" | "posts" | "comments";
type SourceType = "jsonplaceholder" | "dummyjson";




const ObjectViewer: React.FC<{ obj: unknown }> = ({ obj }) => {
    if (obj === null || obj === undefined) return <span>null</span>;

    if (typeof obj !== "object") {
        return <span>{String(obj)}</span>;
    }

    return (
        <ul style={{ marginLeft: "1rem", listStyleType: "none" }}>
            {Object.entries(obj).map(([key, value]) => (
                <li key={key}>
                    <strong>{key}:</strong>{" "}
                    {typeof value === "object" && value !== null ? (
                        <ObjectViewer obj={value} />
                    ) : (
                        String(value)
                    )}
                </li>
            ))}
        </ul>
    );
};

const DataPage: React.FC = () => {
    const params = useParams();
    const source = params.source as SourceType;
    const type = params.type as DataType;

    const [data, setData] = useState<User[] | Post[] | Comment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!source || !type) return;

        let url = "";

        if (source === "jsonplaceholder") {
            url = `https://jsonplaceholder.typicode.com/${type}`;
        } else if (source === "dummyjson") {
            switch (type) {
                case "users":
                    url = "https://dummyjson.com/users";
                    break;
                case "posts":
                    url = "https://dummyjson.com/posts";
                    break;
                case "comments":
                    url = "https://dummyjson.com/comments";
                    break;
            }
        }

        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                const result = json?.users || json?.posts || json?.comments || json;
                setData(result);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [source, type]);

    if (loading) return <p className="text-center">Loading {type}...</p>;

    return (
        <div className="page">
            <h2 className="title">
                {source} - {type}
            </h2>

            <div className="list">
                {data.slice(0, 10).map((item) => (
                    <div key={item.id} className="card">
                        <ObjectViewer obj={item} />
                    </div>
                ))}
            </div>

            <div className="btn-group">
                <Link to={`/choose/${type}`} className="btn btn-gray">
                    Back to Source
                </Link>
                <Link to="/" className="btn btn-gray">
                    Home
                </Link>
            </div>
        </div>
    );
};

export default DataPage;
