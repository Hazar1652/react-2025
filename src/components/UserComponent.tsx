import {type FC, memo} from "react";
//огортаємо вивід 'user' в функцію memo для того щоб елемен не переренджувався також передаємо в середину функцію foo для прикоаду
//передаємо також arr для прикладу використання useMemo
export const UserComponent:FC<{foo:() => void, arr: number[] }> = memo( ({arr}) => {
    //Виводимо 'User'
    console.log('User');
    //Виводимо arr
    console.log(arr);
    return (
        <div>user</div>
    );
});