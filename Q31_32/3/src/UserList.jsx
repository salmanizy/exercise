import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function UserList() {
  const users = [
    { id: 1, name: "Salman" },
    { id: 2, name: "Sasya" },
  ];

  const location = useLocation();

  useEffect(() => {
    console.log("URL berubah ke:", location.pathname);
  }, [location]);

  return (
    <div>
      <h2 style={{ color: "#333", marginBottom: "15px" }}>Daftar User</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <Link
              to={`/users/${user.id}`}
              state={{ userName: user.name }}
              style={{
                display: "block",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                textDecoration: "none",
                color: "#333",
              }}
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
