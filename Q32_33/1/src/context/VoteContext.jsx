import { createContext, useContext } from "react";
import { TodoContext } from "./TodoContext";

export const VoteContext = createContext();

export function VoteProvider({ children }) {
  const { todos, setTodos } = useContext(TodoContext);

  const addVote = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, votes: todo.votes + 1 } : todo
      )
    );
  };

  return (
    <VoteContext.Provider value={{ addVote }}>
      {children}
    </VoteContext.Provider>
  );
}
