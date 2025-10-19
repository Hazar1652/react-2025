const baseJsonUrl = import.meta.env.VITE_BASE_JSON_URL;
const baseDummyUrl = import.meta.env.VITE_BASE_DUMMY_URL;

 export const getAllJson = async <T,>(endpoint:string):Promise<T> =>{
  return await fetch(`${baseJsonUrl}${endpoint}`).then(res=>res.json())
 }
 // getAllJson<IJsPlaceHolderUsers[]>('/users')
 // getAllJson<IJsPlaceHolderPosts[]>('/posts')
 // getAllJson<IJsPlaceHolderComments[]>('/comments')


export const getAllDummy = async <T,>(endpoint:string):Promise<T> =>{
 return await fetch(`${baseDummyUrl}${endpoint}`).then(res=>res.json())
}
// getAllJson<IDummyJsonUsers[]>('/users')
// getAllJson<IDummyJsonPost[]>('/posts')
// getAllJson<IDummyJsonComment[]>('/comments')




