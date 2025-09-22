import { Link, Outlet, useParams } from "react-router-dom";

export default function UserDetail() {
  const { userId } = useParams();

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#111" }}>Detail User ID: {userId}</h2>
      <nav style={{ margin: "15px 0" }}>
        <Link
          to="posts"
          style={{
            marginRight: "15px",
            padding: "8px 14px",
            background: "#2563eb",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          Posts
        </Link>
        <Link
          to="comments"
          style={{
            padding: "8px 14px",
            background: "#059669",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          Comments
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}
