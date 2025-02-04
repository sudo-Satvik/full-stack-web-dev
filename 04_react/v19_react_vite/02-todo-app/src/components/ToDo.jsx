import { Trash2, CircleCheckBig } from "lucide-react";
import { useState } from "react";

const ToDo = () => {
  // Getting user input data with useState hook
  const [task, setTask] = useState("");

  // Storing tasks in an array using State
  const [taskArr, setTaskArr] = useState([]);

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    // Don;t store empty elements
    if (task.trim() === "") return;
    // Add task to the array
    if (!taskArr.includes(task)) {
      setTaskArr((prev) => [...prev, task]);
    }
    // Clear the input field
    setTask("");
  };

  return (
    <div className="flex flex-col items-center">
      <section className="bg-slate-800 text-white p-4 rounded-lg shadow-lg">
        <form onSubmit={handleTaskSubmit}>
          <input
            type="text"
            className="border-1 border-gray-700 focus:border-gray-200 rounded-md p-2 min-w-100"
            placeholder="Complete DSA Lecture..."
            // make it capitalize the first letter
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
            className={`py-5 px-4 border-b-1 border-b-gray-600 bot flex justify-between`}
            key={idx}
          >
            {val}
            <div>
              <button
                className={`bg-green-800 hover:bg-green-900 text-white font-bold p-2 rounded-md cursor-pointer duration-200 mr-2 `}
              >
                <CircleCheckBig size={20} />
              </button>
              <button
                className={`bg-red-800 hover:bg-red-900 text-white font-bold p-2 rounded-md cursor-pointer duration-200`}
              >
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

export default ToDo;
