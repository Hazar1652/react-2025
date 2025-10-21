export interface User {
    id: number;
    name?: string;
    username?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
}

export interface Post {
    id: number;
    title: string;
    body: string;
}

export interface Comment {
    id: number;
    name?: string;
    email?: string;
    body: string;
    user?: {
        username?: string;
    };
}