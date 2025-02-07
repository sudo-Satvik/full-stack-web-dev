import { Trash2, CircleCheckBig } from "lucide-react";

// eslint-disable-next-line react/prop-types
const TodoList = ({ data, onHandleDeleteTodo, onHandleCheckBtn, checked }) => {
  return (
    <>
      <li
        className={`py-5 px-4 border-b-1 border-b-gray-600 flex justify-between ${
          checked ? "line-through text-gray-500" : "decoration-none text-white"
        }`}
      >
        {data}
        <div>
          <button
            className="bg-green-800 hover:bg-green-900 text-white font-bold p-2 rounded-md cursor-pointer duration-200 mr-2"
            onClick={() => onHandleCheckBtn(data)}
          >
            <CircleCheckBig size={20} />
          </button>
          <button
            className="bg-red-800 hover:bg-red-900 text-white font-bold p-2 rounded-md cursor-pointer duration-200"
            onClick={() => onHandleDeleteTodo(data)}
          >
            <Trash2 size={20} />
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoList;
