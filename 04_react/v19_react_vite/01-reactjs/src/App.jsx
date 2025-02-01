import Card from "./components/Card";

const App = () => {
  return (
    <div className="bg-gray-800 w-full h-screen text-gray-50">
      <h1 className="text-4xl font-semibold text-center pt-5">
        Movie Card using Tailwind
      </h1>
      <div className="flex items-center justify-center mt-20">
        <Card />
      </div>
    </div>
  );
};

export default App;
