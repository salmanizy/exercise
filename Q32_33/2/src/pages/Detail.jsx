import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addVoteAndUpdateTodo } from "../features/voteSlice";

export default function Detail() {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todo = todos.find((t) => t.id === parseInt(id));

  return (
    <div style={{ padding: 20 }}>
      <h2>Detail Todo</h2>
      <p><b>{todo.text}</b></p>
      <p>Votes: {todo.votes}</p>

      <button onClick={() => dispatch(addVoteAndUpdateTodo(todo.id))}>
        + Vote
      </button>
      <br /><br />
      <button onClick={() => navigate("/")}>⬅ Kembali</button>
    </div>
  );
}
