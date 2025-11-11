import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";


export const routes = createBrowserRouter([
    //Передаємо масив з шляхами
    {
        path: "/", element: <MainLayout/>,
        //створили шлях і елемент який буде відображати
        children: [{
            index: true, element: <HomePage/>
            //create basic route
        },
            {
                path: "login", element: <LoginPage/>
            },
            //create path to login page
            {
                path: "/auth/resources", element: <AuthResourcesPage/>
            }
            //create path to Auth page
        ]

    }

]);
//Create Routes and export him