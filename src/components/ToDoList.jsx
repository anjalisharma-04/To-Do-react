import ToDoItem from "./ToDoItem";

function ToDoList({ todos, toggleComplete, deleteTask, editTask }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          todo={todo}
          index={index}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default ToDoList;
