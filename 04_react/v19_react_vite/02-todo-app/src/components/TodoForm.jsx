import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TodoForm = ({ onAddTodo }) => {
  const [task, setTask] = useState({ id: "", content: "", checked: "false" });

  const handleInputChange = (value) => {
    setTask({
      id: value,
      content: value,
      checked: false,
    });
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    onAddTodo(task);
    setTask({ id: "", content: "", checked: "false" });
  };

  return (
    <>
      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          className="border-1 border-gray-700 focus:border-gray-200 rounded-md p-2 min-w-100"
          placeholder="Complete DSA Lecture..."
          value={task.content}
          onChange={(e) => handleInputChange(e.target.value)}
          autoComplete="off"
          autoCapitalize="on"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md ml-2 cursor-pointer duration-200"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
