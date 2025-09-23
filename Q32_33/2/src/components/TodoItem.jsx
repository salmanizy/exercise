import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addVoteAndUpdateTodo } from "../features/voteSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/todo/${todo.id}`)}
    >
      <div>
        <b>{todo.text}</b> <br />
        Votes: {todo.votes}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(addVoteAndUpdateTodo(todo.id));
        }}
      >
        + Vote
      </button>
    </div>
  );
}
