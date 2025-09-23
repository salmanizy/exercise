import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoList from "../components/TodoList";

export default function Home() {
  const { todos } = useContext(TodoContext);
  const [user, setUser] = useState("User_1");

  return (
    <div style={{ padding: 20 }}>
      <h1>Todo List</h1>

      <label>
        Pilih User:{" "}
        <select value={user} onChange={(e) => setUser(e.target.value)}>
          <option>User_1</option>
          <option>User_2</option>
        </select>
      </label>

      <TodoList todos={todos} />
    </div>
  );
}
