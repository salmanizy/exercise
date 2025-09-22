import { useParams } from "react-router-dom";

export default function EditPost() {
  const { userId, postId } = useParams();

  return (
    <div>
      <h3 style={{ color: "#333" }}>Edit Post</h3>
      <p>User ID: <b>{userId}</b></p>
      <p>Post ID: <b>{postId}</b></p>

      <textarea
        style={{
          width: "100%",
          height: "100px",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ddd",
          marginBottom: "10px",
        }}
        placeholder="Tulis konten baru disini..."
      />
      <br />
      <button
        style={{
          background: "#28a745",
          color: "#fff",
          padding: "8px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Simpan
      </button>
    </div>
  );
}
