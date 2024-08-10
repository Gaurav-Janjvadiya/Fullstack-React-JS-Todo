import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState(["second"]);
  const addTodo = (value) => {
    setTodos([...todos, value]);
  };
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoApp;
