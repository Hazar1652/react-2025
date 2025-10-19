import {Link, Outlet} from "react-router";


export const PostsPage = () => {
    return (
        <div>
            Posts
            <hr/>
            <Link to="jsonplaceholder">  Go to JSON Placeholder</Link>
            <br/>
            <Link to="dummyjson">  Go to Dummy Json</Link>

            <Outlet/>
        </div>
    );
};