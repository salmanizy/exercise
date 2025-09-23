import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, text: "Belajar Course Jayjay", votes: 0 },
    { id: 2, text: "Mengerjakan Tugas Kampus", votes: 0 },
    { id: 3, text: "Membantu Tugas Adik", votes: 0 },
  ]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}
