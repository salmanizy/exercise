import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { VoteContext } from "../context/VoteContext";

export default function TodoItem({ todo }) {
  const { addVote } = useContext(VoteContext);
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
          addVote(todo.id);
        }}
      >
        + Vote
      </button>
    </div>
  );
}
