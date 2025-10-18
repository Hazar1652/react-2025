export interface User {
  id: number;
  username: string;
  fullName: string;
}

export interface IDummyJsonComment  {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}