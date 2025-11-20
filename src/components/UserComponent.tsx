import {type FC, memo} from "react";
//огортаємо вивід 'user' в функцію memo для того щоб елемен не переренджувався також передаємо в середину функцію foo для прикоаду
export const UserComponent:FC<{foo:() => void }> = memo( () => {
    //Виводимо 'User'
    console.log('User')
    return (
        <div>user</div>
    );
});