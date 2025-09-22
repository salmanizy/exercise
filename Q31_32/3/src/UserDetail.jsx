import { Outlet, Link, useParams } from "react-router-dom";

const users = [
  { id: 1, name: "Salman" },
  { id: 2, name: "Sasya" },
];

export default function UserDetail() {
  const { userId } = useParams();
  const user = users.find(u => u.id === parseInt(userId));
  const userName = user ? user.name : "Unknown";

  return (
    <div>
      <h2>Detail User {userId}</h2>
      <p>Nama: <b>{userName}</b></p>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="posts" style={{ marginRight: "15px" }}>Posts</Link>
        <Link to="comments" state={{ userName }}>Comments</Link>
      </nav>

      <Outlet />
    </div>
  );
}
