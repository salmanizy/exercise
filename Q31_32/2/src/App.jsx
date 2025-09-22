import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import UserDetail from "./UserDetail";
import UserPosts from "./UserPosts";
import EditPost from "./EditPost";
import UserComments from "./UserComments";

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Segoe UI, sans-serif", background: "#f3f4f6", minHeight: "100vh" }}>
        <header
          style={{
            background: "#4f46e5",
            padding: "15px 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "#fff", margin: 0 }}>Nested Routing App</h1>
          <nav>
            <Link to="/" style={{ color: "#fff", marginRight: "20px", textDecoration: "none", fontWeight: "500" }}>
              Home
            </Link>
            <Link to="/users" style={{ color: "#fff", textDecoration: "none", fontWeight: "500" }}>
              List User
            </Link>
          </nav>
        </header>

        <main style={{ padding: "30px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />}>
              <Route path=":userId" element={<UserDetail />}>
                <Route path="posts" element={<UserPosts />}>
                  <Route path=":postId/edit" element={<EditPost />} />
                </Route>
                <Route path="comments" element={<UserComments />} />
              </Route>
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
