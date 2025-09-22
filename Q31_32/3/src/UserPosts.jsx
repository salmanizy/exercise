import { Link, useParams } from "react-router-dom";

export default function UserPosts() {
  const { userId } = useParams();
  const posts = [
    { id: 101, title: "Post Pertama" },
    { id: 102, title: "Post Kedua" },
  ];

  return (
    <div>
      <h3 style={{ marginBottom: "10px", color: "#333" }}>Posts dari User {userId}</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "6px",
            }}
          >
            {post.title} -{" "}
            <Link to={`${post.id}/edit`} style={{ color: "#007bff" }}>
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
