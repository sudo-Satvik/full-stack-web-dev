import ToDo from "./components/ToDo";

const App = () => {
  return (
    <div className="bg-slate-900 text-white h-screen w-full">
      <h1 className="text-4xl font-bold text-center p-4">Todo Application</h1>
      <div className="flex justify-center items-center">
        <ToDo />
      </div>
    </div>
  );
};

export default App;
