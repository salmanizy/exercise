import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <div style={{ marginTop: 20 }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}