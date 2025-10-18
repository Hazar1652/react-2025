import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import {UsersPage} from "./components/UsersPage.tsx";
import {PostsPage} from "./components/PostsPage.tsx";
import {CommentsPage} from "./components/CommentsPage.tsx";
import {ProductsPage} from "./components/ProductsPage.tsx";
import App from "./App.tsx";
import {JsonPlaceHolderPage} from "./components/JsonPlaceHolderPage.tsx";
import {DummyJsonPage} from "./components/DummyJsonPage.tsx";


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
                </Route>
                <Route path={'products'} element={<ProductsPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>)
