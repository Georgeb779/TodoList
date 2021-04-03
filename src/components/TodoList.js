import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filterbystatus }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterbystatus.map((todo) => (
          <Todo
            text={todo.text}
            complete={todo.completed}
            key={todo.id}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
