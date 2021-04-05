import React from "react";
import TodoList from "./TodoList";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
  filterbystatus,
  status,
  darkMode,
}) => {
  const writeText = (e) => {
    setInputText(e.target.value);
  };

  const submiTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You should add something to do!",
        background: darkMode ? "hsl(235, 24%, 19%)" : "white",
      });
    } else {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.floor(Math.random() * 999999),
        },
      ]);
      setInputText("");
    }
  };

  const clearAll = (e) => {
    e.preventDefault();
    setTodos((todos = []));
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  let items = todos.filter((todo) => todo.completed === false);
  let itemLeft = items.length;

  let statuActivate = {
    color: "hsl(220, 98%, 61%)",
    fontWeight: "bold",
  };

  let statuActivateDark = {
    color: "hsl(234, 39%, 85%)",
    fontWeight: "bold",
  };

  let centerOwnwe = {
    placeSelf: "center",
    paddingTop: "12px",
    paddingBottom: '12px',
    background: "0 0!important",
    border: "none",
    color:'hsl(235, 19%, 35%)',
    transition: "color .2s ease-in",
    fontSize: "13px",
  };

  return (
    <form action="">
      <div className="todo-add">
        <input
          value={inputText}
          onChange={writeText}
          type="text"
          placeholder="Create a new todo"
          className="input-text"
        />
        <button
          aria-label="add a new todo"
          onClick={submiTodoHandler}
          type="submit"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      <TodoList
        todos={todos}
        setTodos={setTodos}
        filterbystatus={filterbystatus}
      />

      <div className="filter-todo">
        <div className="sub-section">
          <p>{itemLeft} item left</p>
          <button
            aria-label="clear all todo"
            onClick={clearAll}
            className="btn-inline"
            type="button"
          >
            Clear All
          </button>
        </div>

        <div className="section-filter">
          <button
            aria-label="All to do items"
            onClick={statusHandler}
            className="btn-inline"
            type="button"
            value="all"
            style={
              status === "all" && darkMode === false
                ? statuActivate
                : status === "all" && darkMode === true
                ? statuActivateDark
                : null
            }
          >
            All
          </button>
          <button
            aria-label="completed todo items"
            onClick={statusHandler}
            className="btn-inline"
            type="button"
            value="completed"
            style={
              status === "completed" && darkMode === false
                ? statuActivate
                : status === "completed" && darkMode === true
                ? statuActivateDark
                : null
            }
          >
            Completed
          </button>
          <button
            aria-label="unCompleted todo items"
            onClick={statusHandler}
            className="btn-inline"
            type="button"
            value="unCompleted"
            style={
              status === "unCompleted" && darkMode === false
                ? statuActivate
                : status === "unCompleted" && darkMode === true
                ? statuActivateDark
                : null
            }
          >
            Active
          </button>
        </div>
        <div style={centerOwnwe}>
          <p >GeorgeDev</p>
        </div>
      </div>
    </form>
  );
};

export default Form;
