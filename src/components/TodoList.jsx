import React from "react";
import TaskItem from "./TaskItem";

function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo, i) => (
        <TaskItem todo={todo} key={i} />
      ))}
    </div>
  );
}

export default TodoList;
