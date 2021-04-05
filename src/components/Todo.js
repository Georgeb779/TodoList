import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

function Todo({ text, todos, setTodos, todo, complete }) {
  //handlers
  const deleteHandler = (e) => {
    e.preventDefault();
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const checkHandler = (e) => {
    e.preventDefault();
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id)
          return {
            ...item,
            completed: !item.completed,
          };
        return item;
      })
    );
  };

  //styles

  let completeStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };

  let checkBackground = {
    backgroundImage: "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
  };

  return (
    <div className="todo">
      <button
        aria-label="check or uncheck todo"
        style={complete ? checkBackground : null}
        onClick={checkHandler}
        className="complete-btn"
      >
        <FontAwesomeIcon icon={complete ? faCheck : faCircle} />
      </button>

      <li
        style={complete ? completeStyle : null}
        onClick={checkHandler}
        className="todo"
      >
        {text}
      </li>

      <button
        aria-label="delete todo item"
        onClick={deleteHandler}
        className="trash-btn"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}

export default Todo;
