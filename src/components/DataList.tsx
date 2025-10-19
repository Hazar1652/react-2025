import React, { useEffect, useState } from "react";

interface DataListProps {
    url: string;
}

type JsonObject = { [key: string]: unknown };

const DataList: React.FC<DataListProps> = ({ url }) => {
    const [data, setData] = useState<JsonObject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                return res.json();
            })
            .then((json) => {
                if (cancelled) return;

                const payload =
                    Array.isArray(json)
                        ? json
                        : (json.users ?? json.posts ?? json.comments ?? json);

                setData(Array.isArray(payload) ? payload : [payload]);
            })
            .catch((err: unknown) => {
                if (cancelled) return;
                setError(err instanceof Error ? err.message : String(err));
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, [url]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {data.map((item, index) => (
                <pre key={index}>{JSON.stringify(item, null, 2)}</pre>
            ))}
        </div>
    );
};

export default DataList;
