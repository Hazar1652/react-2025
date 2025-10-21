import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const ChooseSource: React.FC = () => {
    const { type } = useParams<{ type: string }>();
    const navigate = useNavigate();

    return (
        <div className="page">
            <h2 className="title">Choose Data Source for {type}</h2>
            <div className="btn-group">
                <button
                    onClick={() => navigate(`/data/jsonplaceholder/${type}`)}
                    className="btn btn-blue"
                >
                    JSONPlaceholder
                </button>
                <button
                    onClick={() => navigate(`/data/dummyjson/${type}`)}
                    className="btn btn-orange"
                >
                    DummyJSON
                </button>
            </div>
            <Link to="/" className="link">
                ← Back Home
            </Link>
        </div>
    );
};

export default ChooseSource;