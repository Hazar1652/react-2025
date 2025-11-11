import axios from 'axios';
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductResponseModel} from "../models/IProductResponseModel.ts";
import {retriveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

// create type
type LoginData = {
    username: string,
    password: string,
    expiresInMins: number
}

export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    //Визначаємо шлях
    headers: {},
});
axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === "GET") {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return requestObject;
})
//перехоплюємо усі гітові запити і створюємо header Bearer + user

//create axios for API
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    //створили стрілочну асинхронну  функцію яка приймає обєкт, деструкторовуємо інформацію
    //створюємо запит на енд поінт , повертає відповідь юзерів з токенами
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    //Записуємо в local Storage наш user і токени
    return userWithTokens

}
//create axios for auth
export const loadAuthProducts = async (): Promise<IProduct[]> => {
    //створили стрілочну асинхронну  функцію
    const {data:{products}} = await axiosInstance.get<IProductResponseModel>('/products');
    //вітдає обєкт продуктів
    //деструктуруєм
    return products
}

export const refresh = async () => {
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');

    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh',
        {
            refreshToken: iUserWithTokens.refreshToken,
            expiresInMins: 1
        });
    // передаємо refreshToken і у відповідь буде прилітати обєкт з новим acces i refresh

    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    //оновлюємо данні
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
    //сетаєм назад в локал стордж оновленні данні

    //виводимо токени
    //беремо користувача беремо access Token і впроваджуємо в нбого новий access token і так само з refresh
}

//стоврюємо refresh функцію для токена