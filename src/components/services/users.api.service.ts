const baseJsonUrl = import.meta.env.VITE_BASE_JSON_URL;
const baseDummyUrl = import.meta.env.VITE_BASE_DUMMY_URL;

 export const getUsersJs = async () => fetch(`${baseJsonUrl}/users`).then(res => res.json());
 export const getUsersDummy = async () => fetch(`${baseDummyUrl}/users`).then(res => res.json());