import {useEffect} from "react";
import {login} from "../services/api.service.ts";

export const LoginComponent = () => {
    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1

        });
        // передаємо параметри в login() username password expiresInMins які є на сайті dummyJson

    }, []);
    //create UseEffect and function login
    return (
        <>
            loginPage
        </>
    );
};