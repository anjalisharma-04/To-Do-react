function ToDoItem({ todo, index, toggleComplete, deleteTask, editTask }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm hover:bg-gray-100 transition">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(index)}
          className="w-4 h-4 text-indigo-500"
        />
        <span className={`text-lg ${todo.completed ? "line-through text-gray-400" : ""}`}>
          {todo.text}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => editTask(index)}
          className="text-yellow-500 hover:text-yellow-600 text-xl"
        >
          ✏️
        </button>
        <button
          onClick={() => deleteTask(index)}
          className="text-red-500 hover:text-red-600 text-xl"
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
