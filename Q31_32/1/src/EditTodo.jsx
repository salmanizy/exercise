import { useParams } from "react-router-dom";
export default function EditTodo() {
  const { id } = useParams();
  return <h1>Halaman Ubah Todo dengan ID: {id}</h1>;
}