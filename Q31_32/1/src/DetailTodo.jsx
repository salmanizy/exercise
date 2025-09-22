import { useParams } from "react-router-dom";
export default function DetailTodo() {
  const { id } = useParams();
  return <h1>Halaman Detail Todo dengan ID: {id}</h1>;
}