import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import UserPosts from "./UserPosts";
import EditPost from "./EditPost";
import UserComments from "./UserComments";
import Breadcrumbs from "./Breadcrumbs";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <Breadcrumbs />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<UserDetail />}>
            <Route path="posts" element={<UserPosts />} />
            <Route path="posts/:postId/edit" element={<EditPost />} />
            <Route path="comments" element={<UserComments />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
