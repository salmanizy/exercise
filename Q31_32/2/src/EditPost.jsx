import { useParams } from 'react-router-dom'

export default function EditPost() {
  const { userId, postId } = useParams();
  return (
    <div style={{  padding: "10px", border: "1px solid #aaa" }}>
      <h4>Edit Post {postId} dari User {userId}</h4>
      <form>
        <input type="text" defaultValue={`Judul Post ${postId}`} style={{ padding: "8px", marginBottom: "10px" }} />
        <br />
        <textarea defaultValue="Isi post... (Placeholder)" style={{ width: "300px", height: "100px" }} />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
