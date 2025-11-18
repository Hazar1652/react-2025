import {type FC, memo} from "react";
//огортаємо вивід 'user' в функцію memo для того щоб елемен не переренджувався
export const UserComponent:FC<{foo:() => void }> = memo( () => {
    //Виводимо 'User'
    console.log('User')
    return (
        <div>user</div>
    );
});