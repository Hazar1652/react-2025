import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/Menu";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";

const App = () => {
    return (
        <div>
            <Menu />
            <Routes>
                <Route path="/" element={<Navigate to="/users/jsonplaceholder" />} />

                <Route path="/users/jsonplaceholder" element={<UsersPage source="jsonplaceholder" />} />
                <Route path="/users/dummyjson" element={<UsersPage source="dummyjson" />} />

                <Route path="/posts/jsonplaceholder" element={<PostsPage source="jsonplaceholder" />} />
                <Route path="/posts/dummyjson" element={<PostsPage source="dummyjson" />} />

                <Route path="/comments/jsonplaceholder" element={<CommentsPage source="jsonplaceholder" />} />
                <Route path="/comments/dummyjson" element={<CommentsPage source="dummyjson" />} />
            </Routes>
        </div>
    );
};

export default App;
