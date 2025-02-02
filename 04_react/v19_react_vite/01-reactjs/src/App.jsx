// import Card from "./components/Card";
// import Practice, { Practiced } from "./Practice";
// import { gameData } from "./data/cardData.js";

import Profile from "./components/Profile";

const App = () => {
  const students = ["John", "Doe", "Jane", "Soen"];
  for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
  }
  return (
    <div className="bg-gray-800 w-full h-screen text-gray-50">
      {/* <h1 className="text-4xl font-semibold text-center pt-5">All GTA Games</h1>
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
      </div> */}
      {/* <Practice />
      <Practiced /> */}

      <h1>Profile Card Challenge</h1>
      <Profile
        name="Satvik Sharma"
        age={20}
        description="I am a web developer"
        greetings={
          <p>
            Hello, <strong>Satvik Sharma</strong>
          </p>
        }
        children={<p>Children</p>}
      >
        <p>Hobbies: Badminton, Watching Anime, Coding</p>
        <button className="btn bg-black py-2 px-4 rounded my-2">Contact</button>
      </Profile>
    </div>
  );
};

export default App;

//  image, name, description, price
