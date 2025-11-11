export const retriveLocalStorage = <T>(key: string)  => {
    const object : string = localStorage.getItem( key) || '';
    //тут прилітає або обєкт або нічого
    //робимо перевірку якщо object немає то повертаємо пустий обєкт
    if (!object) {
        return {} as T;
    }

    //тут буде цей обєкт і повертаємо строготипізований
    const parse  = JSON.parse( object);
    return parse as T;
}
//дістаємо з local storage по ключу обєкт