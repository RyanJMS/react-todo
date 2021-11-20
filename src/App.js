import "./App.css";
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList.js";
import AddTodoForm from "./components/AddTodoForm.js";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [validation, setValidation] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      setValidation("Please enter a name");
    }
    if (!description) {
      setValidation("Please enter a description");
    }
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        name: name,
        description,
        description,
      },
    ]);
    setName("");
    setDescription("");
    setValidation("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDeleteClick = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <AddTodoForm
        name={name}
        description={description}
        validation={validation}
        onNameChange={handleNameChange}
        onDescriptionChange={handleDescriptionChange}
        onFormSubmit={handleFormSubmit}
      />
      <div>{todos.length === 0 && <p>Add your first Todo</p>}</div>
      <TodoList todos={todos} onDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
