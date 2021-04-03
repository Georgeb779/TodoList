// import "./styles/App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

// states

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [darkMode, setDarkMode] = useState(true);
  const [filterbystatus, setfilterbystatus] = useState([]);

  // funtions
  // save in local storage

  const saveLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalStorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLOcal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLOcal);
    }
  };

  // useEffect

  useEffect(() => {
    const body = document.body;

    // If dark mode is enabled - adds classes to update dark-mode styling.
    // Else, removes and styling is as normal.
    if (darkMode === true) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    // filter
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setfilterbystatus(todos.filter((todo) => todo.completed === true));
          break;
        case "unCompleted":
          setfilterbystatus(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setfilterbystatus(todos);
          break;
      }
    };

    filterHandler();
    saveLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>
          TO DO{" "}
          <button
            onClick={() =>
              darkMode === false ? setDarkMode(true) : setDarkMode(false)
            }
          >
            <FontAwesomeIcon icon={darkMode === false ? faMoon : faSun} />{" "}
          </button>{" "}
        </h1>

        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
          filterbystatus={filterbystatus}
          status={status}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </header>
    </div>
  );
}

export default App;
