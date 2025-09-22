import { Link, Outlet } from "react-router-dom";

export default function Users() {
  const users = [
    { id: 1, name: "Salman" },
    { id: 2, name: "Alfa" },
    { id: 3, name: "Izzy" },
  ];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "250px",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#111" }}>List User</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {users.map((u) => (
            <li key={u.id} style={{ marginBottom: "10px" }}>
              <Link
                to={`/users/${u.id}`}
                style={{
                  display: "block",
                  padding: "10px",
                  background: "#4f46e5",
                  color: "#fff",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                {u.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}
