import { useLocation } from "react-router-dom";

export default function UserComments() {
  const location = useLocation();
  const userName = location.state?.userName || "Unknown";

  return (
    <div>
      <h3 style={{ marginBottom: "15px", color: "#333" }}>Komentar untuk {userName}</h3>
      <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "#555" }}>
        <li>Komentar pertama...</li>
        <li>Komentar kedua...</li>
      </ul>
    </div>
  );
}
