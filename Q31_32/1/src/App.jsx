import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import CreateTodo from "./CreateTodo";
import EditTodo from "./EditTodo";
import DetailTodo from "./DetailTodo";

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", background: "#f9f9f9", minHeight: "100vh" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            padding: "10px 20px",
            background: "#4f46e5",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ color: "#fff", margin: 0 }}>Todo App</h2>
          <div>
            <Link to="/" style={{ color: "#fff", marginRight: "15px", textDecoration: "none", fontWeight: "bold" }}>
              Home
            </Link>
            <Link to="/create" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
              Buat Todo
            </Link>
          </div>
        </nav>

        <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateTodo />} />
            <Route path="/edit/:id" element={<EditTodo />} />
            <Route path="/detail/:id" element={<DetailTodo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
