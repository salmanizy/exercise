import { useNavigate } from "react-router-dom";
import { useTodoStore } from "./store/todoStore";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const { todoList, increaseCounter } = useTodoStore();
  const [user, setUser] = useState("User_1");

  return (
    <div className="App">
      <h1>Todo List</h1>

      <label>
        Pilih User:{" "}
        <select value={user} onChange={(e) => setUser(e.target.value)}>
          <option>User_1</option>
          <option>User_2</option>
        </select>
      </label>

      {todoList && todoList.map((todoItem, idx) => {
        return (
          <div key={todoItem.id} style={{ padding: "16px", borderBottom: "1px solid #000" }}>
            <span>{todoItem.title}</span>
            <span style={{ marginLeft: "16px" }}>{todoItem.counter}</span>
            <button onClick={() => increaseCounter(idx)}>+</button>
            <button
              onClick={() => navigate(`/detail/${todoItem.id}`)}
              style={{ marginLeft: "8px" }}
            >
              Go to Detail
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
