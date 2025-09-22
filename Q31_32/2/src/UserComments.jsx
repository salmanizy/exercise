import { useParams } from "react-router-dom";

export default function UserComments() {
  const { userId } = useParams();

  const comments = [
    { id: 201, text: "Komentar pertama" },
    { id: 202, text: "Komentar kedua" },
  ];

  return (
    <div>
      <h3>Komentar untuk User {userId}</h3>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>{c.text}</li>
        ))}
      </ul>
    </div>
  );
}
