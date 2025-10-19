import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import {UsersPage} from "./Pages/UsersPage.tsx";
import {PostsPage} from "./Pages/PostsPage.tsx";
import {CommentsPage} from "./Pages/CommentsPage.tsx";
import App from "./App.tsx";
import {JsonPlaceHolderPage} from "./Pages/JsonPlaceHolderPage.tsx";
import {DummyJsonPage} from "./Pages/DummyJsonPage.tsx";


createRoot(document.getElementById('root')!)
    .render(<BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App/>}>
                <Route path='users' element={<UsersPage/>}>
                    <Route path='jsonplaceholder' element={<JsonPlaceHolderPage/>}/>
                    <Route path='dummyjson' element={<DummyJsonPage/>}/>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path='jsonplaceholder' element={<JsonPlaceHolderPage/>}/>
                    <Route path='dummyjson' element={<DummyJsonPage/>}/>
                </Route>

                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path='jsonplaceholder' element={<JsonPlaceHolderPage/>}/>
                    <Route path='dummyjson' element={<DummyJsonPage/>}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>)
