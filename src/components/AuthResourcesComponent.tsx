import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

export const AuthResourcesComponent = () => {
    useEffect(() => {
        loadAuthProducts().then(products => {
            //Викликаємо функцію loadAuthProducts
            console.log(products);
            //виводимо products
        }).catch(reason =>{
            console.log(reason);
        //ловимо помилку
        refresh()
            .then(() =>loadAuthProducts())
            .then(value => console.log(value))

    })
    }, []);
    //create useEffect and function load
    return (
        <>
            AuthResourcesPage
        </>
    );
};