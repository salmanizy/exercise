import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { VoteContext } from "../context/VoteContext";

export default function Detail() {
  const { id } = useParams();
  const { todos } = useContext(TodoContext);
  const { addVote } = useContext(VoteContext);
  const navigate = useNavigate();

  const todo = todos.find((t) => t.id === parseInt(id));

  return (
    <div style={{ padding: 20 }}>
      <h2>Detail Todo</h2>
      <p><b>{todo.text}</b></p>
      <p>Votes: {todo.votes}</p>

      <button onClick={() => addVote(todo.id)}>+ Vote</button>
      <br /><br />
      <button onClick={() => navigate("/")}>⬅ Kembali</button>
    </div>
  );
}
