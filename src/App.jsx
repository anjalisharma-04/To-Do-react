import React, { useState } from "react";
import "./index.css";
import Footer from "./components/Footer";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIdx, setEditIdx] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const startEdit = (index, text) => {
    setEditIdx(index);
    setEditText(text);
  };

  const saveEdit = (index) => {
    if (editText.trim() === "") return;
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, text: editText } : todo
      )
    );
    setEditIdx(null);
    setEditText("");
  };

  return (
    <>
      <div className="container">
        <h1>My To-Do List</h1>
        <form className="form" onSubmit={addTask}>
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <ul className="todo-list">
          {todos.map((todo, idx) => (
            <li
              key={idx}
              className={`task${todo.completed ? " completed" : ""}`}
            >
              <span
                className="task-content"
                onClick={() => toggleComplete(idx)}
                style={{ cursor: "pointer" }}
              >
                {editIdx === idx ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={() => saveEdit(idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveEdit(idx);
                    }}
                    autoFocus
                    style={{ fontSize: "1rem", padding: "4px 8px" }}
                  />
                ) : (
                  todo.text
                )}
              </span>
              <div className="task-actions">
                <button onClick={() => startEdit(idx, todo.text)}>Edit</button>
                <button onClick={() => deleteTask(idx)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
