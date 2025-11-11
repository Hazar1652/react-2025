import {Link} from "react-router-dom";
// link router dom
const Menu = () => {
    return (
        <div>
            {/*//create div element*/}
            <ul>
                {/*//create ul element*/}
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'/login' }>login</Link></li>
                <li><Link to={'/auth/resources' }>resources</Link></li>
                {/*create li elements and Link  inside to path*/}
            </ul>
            <hr/>
        </div>
    );
};
export default Menu;