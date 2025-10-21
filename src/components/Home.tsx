import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div className="page">
            <h1 className="title">Choose Data Type</h1>
            <div className="btn-group">
                <Link to="/choose/users" className="btn btn-blue">
                    Users
                </Link>
                <Link to="/choose/posts" className="btn btn-green">
                    Posts
                </Link>
                <Link to="/choose/comments" className="btn btn-purple">
                    Comments
                </Link>
            </div>
        </div>
    );
};

export default Home;