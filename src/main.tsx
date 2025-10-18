import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import {UsersComponent} from "./components/UsersComponent.tsx";
import {PostsComponent} from "./components/PostsComponent.tsx";
import {CommentsComponent} from "./components/CommentsComponent.tsx";
import {ProductsComponent} from "./components/ProductsComponent.tsx";
import App from "./App.tsx";
import {JsonPlaceHolderComponent} from "./components/JsonPlaceHolderComponent.tsx";
import {DummyJsonComponent} from "./components/DummyJsonComponent.tsx";


createRoot(document.getElementById('root')!)
    .render(<BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App/>}>
                <Route path='users' element={<UsersComponent/>}>
                    <Route path='jsonplaceholder' element={<JsonPlaceHolderComponent/>}/>
                    <Route path='dummyjson' element={<DummyJsonComponent/>}/>
                </Route>
                <Route path={'posts'} element={<PostsComponent/>}>
                    <Route path='jsonplaceholder' element={<JsonPlaceHolderComponent/>}/>
                    <Route path='dummyjson' element={<DummyJsonComponent/>}/>
                </Route>

                <Route path={'comments'} element={<CommentsComponent/>}>
                    <Route path='jsonplaceholder' element={<JsonPlaceHolderComponent/>}/>
                </Route>
                <Route path={'products'} element={<ProductsComponent/>}/>
            </Route>
        </Routes>
    </BrowserRouter>)
