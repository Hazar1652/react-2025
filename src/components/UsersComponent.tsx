import {Link, Outlet} from "react-router";


export const UsersComponent = () => {
    return (
        <div>
        Users
            <hr/>
            <Link to="jsonplaceholder">  Go to JSON Placeholder</Link>
            <br/>
            <Link to="dummyjson">  Go to Dummy Json</Link>

            <Outlet/>

        </div>
    );

};