import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";

export const UsersComponent = () => {
    //виводимо в консоль "test"
    console.log('users')
    //створюємо useState для юзерів
    const [, setUsers] = useState([])
    //     створюємо зовнішню функцію foo яку будемо передавати в fc component
    const foo = useCallback(() =>{
        console.log('test')
    },[]);
    //створюємо useEffect
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            //передаємо value які отримали
            setUsers(value);

        });
        return () => {
            console.log('unsubscribe');
        }
    }, []);
    return (
        <div> users component
            {/*передаємо fc foo*/}
            <UserComponent foo={foo}/>
        </div>
    );
};