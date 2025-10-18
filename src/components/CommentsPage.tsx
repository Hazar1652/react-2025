import {Link, Outlet} from "react-router";

export const CommentsPage = () => {
    return (
        <div>
            Comments
            <hr/>
            <Link to="jsonplaceholder">  Go to JSON Placeholder</Link>
            <br/>
            <Outlet/>
        </div>
    );
};