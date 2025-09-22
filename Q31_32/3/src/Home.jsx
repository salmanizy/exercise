import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h4 style={{ marginBottom: "20px", color: "#444" }}>Klik tombol dibawah</h4>
      <Link
        to="/users"
        style={{
          background: "#007bff",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Lihat Daftar User
      </Link>
    </div>
  );
}
