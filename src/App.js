import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function App() {
  // Declaring the states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [darkMode, setDarkMode] = useState(getMode);
  const [filterbystatus, setfilterbystatus] = useState([]);

  //useEffect area
  
  //setting dark mode

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getMode() {
    const savedmode = JSON.parse(localStorage.getItem("dark"));
    return savedmode || false;
  }

  if (darkMode === false) {
    const body = document.body;
    body.classList.remove("dark-mode");
  } else {
    const body = document.body;
    body.classList.add("dark-mode");
  }

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

  // save in local storage

  useEffect(() => {
    getLocalStorage();
  }, []);

  //filter item state: completed, unCompleted, All
  useEffect(() => {
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
          TO DO
          <button
            aria-label="change to dark or light mode "
            onClick={() => setDarkMode((prevMode) => !prevMode)}
          >
            <FontAwesomeIcon icon={darkMode === false ? faMoon : faSun} />
          </button>
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
