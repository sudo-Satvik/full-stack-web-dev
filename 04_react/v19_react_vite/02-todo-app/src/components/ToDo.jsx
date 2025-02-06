import { Trash2, CircleCheckBig, Ban } from "lucide-react";
import { useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [taskArr, setTaskArr] = useState([]);
  const [errorMsg, setErrorMsg] = useState(""); // State for error message

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    if (!taskArr.includes(task)) {
      setTaskArr((prev) => [...prev, task]);
      setErrorMsg(""); // Clear error when a new task is added
    } else {
      setErrorMsg("Task already exists!"); // Show error message
    }

    setTask("");
  };

  return (
    <div className="flex flex-col items-center">
      {errorMsg && (
        <Toast errorMsg={errorMsg} onClose={() => setErrorMsg("")} />
      )}
      <section className="bg-slate-800 text-white p-4 rounded-lg shadow-lg">
        <form onSubmit={handleTaskSubmit}>
          <input
            type="text"
            className="border-1 border-gray-700 focus:border-gray-200 rounded-md p-2 min-w-100"
            placeholder="Complete DSA Lecture..."
            value={task.charAt(0).toUpperCase() + task.slice(1)}
            onChange={(e) => setTask(e.target.value)}
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
      </section>
      <ul className="mt-4 bg-slate-800 rounded-t-lg shadow-lg min-w-100 w-full">
        {taskArr.map((val, idx) => (
          <li
            className="py-5 px-4 border-b-1 border-b-gray-600 flex justify-between"
            key={idx}
          >
            {val}
            <div>
              <button className="bg-green-800 hover:bg-green-900 text-white font-bold p-2 rounded-md cursor-pointer duration-200 mr-2">
                <CircleCheckBig size={20} />
              </button>
              <button className="bg-red-800 hover:bg-red-900 text-white font-bold p-2 rounded-md cursor-pointer duration-200">
                <Trash2 size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn bg-red-800 p-3 rounded-md mt-8 cursor-pointer hover:bg-red-900 duration-200">
        Clear All
      </button>
    </div>
  );
};

// Toast Component
// eslint-disable-next-line react/prop-types
const Toast = ({ errorMsg, onClose }) => {
  return (
    <div
      className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-red-900/30 absolute top-4 right-4 z-50"
      role="alert"
    >
      <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-red-500 bg-blue-100 rounded-lg dark:bg-red-800 dark:text-gray-50">
        <Ban size={20} />
      </div>
      <div className="ms-3 text-sm text-white font-normal">{errorMsg}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-red-900/0 dark:hover:bg-red-900 cursor-pointer"
        onClick={onClose}
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default ToDo;
