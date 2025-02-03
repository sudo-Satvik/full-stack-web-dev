import Card from "./components/Card";
// import Practice, { Practiced } from "./Practice";
import { gameData } from "./data/cardData.js";

import Profile from "./components/Profile";
import { EventHandling } from "./components/EventHandling.jsx";
import EventProps from "./components/EventProps.jsx";
import EventPropagation from "./components/EventPropagation.jsx";
import State from "./components/State.jsx";

const App = () => {
  const handleSubmit = () => {
    confirm("Ahea ahea ahea ahea");
  };
  return (
    <div className="bg-gray-800 w-full min-h-screen text-gray-50">
      <h1 className="text-4xl font-semibold text-center pt-5">All GTA Games</h1>
      <div className="flex items-center justify-center mt-20 flex-wrap gap-10 pb-10">
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

      {/* <h1>Profile Card Challenge</h1>
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
        <br />
      </Profile>
      <button
        className="btn bg-amber-300 text-black px-4 py-2 rounded cursor-pointer"
        onClick={handleSubmit}
      >
        Hanjiiii, yahan dabaae
      </button> */}

      <EventHandling />
      <EventProps />
      <EventPropagation />
      <State />
    </div>
  );
};

export default App;

//  image, name, description, price
