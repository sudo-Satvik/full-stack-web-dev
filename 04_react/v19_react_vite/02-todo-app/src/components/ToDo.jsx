import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Toast from "./Toast";
import { getLocalStorageTodoData } from "./TodoLocalStorage";
const todoLocalStorageKey = "todo";

const ToDo = () => {
  const [taskArr, setTaskArr] = useState(() => getLocalStorageTodoData());

  const [errorMsg, setErrorMsg] = useState("");

  const handleTaskSubmit = (task) => {
    const { id, content, checked } = task;

    if (!content.trim()) return;

    const ifTodoExists = taskArr.find(
      (currTask) => currTask.content === content
    );

    if (!ifTodoExists) {
      setTaskArr((prev) => [...prev, { id, content, checked }]);
      setErrorMsg("");
    } else {
      setErrorMsg("Task already exists!");
    }
  };

  // Save tasks to local storage when taskArr changes
  useEffect(() => {
    localStorage.setItem(todoLocalStorageKey, JSON.stringify(taskArr));
  }, [taskArr]);

  // Fix: Delete task by `id` instead of `content`
  const handleDeleteBtn = (taskId) => {
    setTaskArr(taskArr.filter((currTask) => currTask.id !== taskId));
  };

  // Fix: Toggle check status by `id` instead of `content`
  const handleCheckBtn = (taskId) => {
    setTaskArr(
      taskArr.map((currTask) =>
        currTask.id === taskId
          ? { ...currTask, checked: !currTask.checked }
          : currTask
      )
    );
  };

  return (
    <div className="flex flex-col items-center">
      {errorMsg && (
        <Toast errorMsg={errorMsg} onClose={() => setErrorMsg("")} />
      )}
      <section className="bg-slate-800 text-white p-4 rounded-lg shadow-lg">
        <TodoForm onAddTodo={handleTaskSubmit} />
      </section>
      <ul className="mt-4 bg-slate-800 rounded-t-lg shadow-lg min-w-100 w-full">
        {taskArr.map((val) => (
          <TodoList
            key={val.id}
            data={val.content}
            onHandleDeleteTodo={() => handleDeleteBtn(val.id)} // ✅ Pass only `id`
            checked={val.checked}
            onHandleCheckBtn={() => handleCheckBtn(val.id)} // ✅ Pass `id` instead of `content`
          />
        ))}
      </ul>
      <button
        className="btn bg-red-800 p-3 rounded-md mt-8 cursor-pointer hover:bg-red-900 duration-200"
        onClick={() => setTaskArr([])}
      >
        Clear All
      </button>
    </div>
  );
};

export default ToDo;
