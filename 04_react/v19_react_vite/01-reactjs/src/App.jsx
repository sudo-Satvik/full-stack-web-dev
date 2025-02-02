import Card from "./components/Card";
// import Practice, { Practiced } from "./Practice";
import { gameData } from "./data/cardData.js";

const App = () => {
  const students = ["John", "Doe", "Jane", "Soen"];
  for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
  }
  return (
    <div className="bg-gray-800 w-full h-auto text-gray-50">
      <h1 className="text-4xl font-semibold text-center pt-5">All GTA Games</h1>
      <div className="flex items-center justify-center mt-20 flex-wrap gap-10">
        {gameData.map((game, idx) => (
          <Card
            key={idx}
            name={game.name}
            img={game.image}
            description={game.description}
            price={game.price}
          />
        ))}
      </div>
      {/* <Practice />
      <Practiced /> */}
    </div>
  );
};

export default App;

//  image, name, description, price
