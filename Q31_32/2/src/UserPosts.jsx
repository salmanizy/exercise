import { Link, Outlet, useParams } from "react-router-dom";

export default function UserPosts() {
  const { userId } = useParams();

  const posts = [
    { id: 101, title: "Post Pertama" },
    { id: 102, title: "Post Kedua" },
  ];

  return (
    <div>
      <h3>Posts dari User {userId}</h3>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            {p.title} - <Link to={`${p.id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
