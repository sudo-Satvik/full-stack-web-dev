import { useEffect, useState } from "react";

const CardStack = () => {
  const [api, setApi] = useState(null);
  const API = "https://pokeapi.co/api/v2/pokemon/ditto";

  const fetchApi = () => {
    setTimeout(() => {
      fetch(API)
        .then((res) => res.json())
        .then((data) => setApi(data))
        .catch((err) => console.log(err));
    }, 2000);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // Error handling
  if (!api)
    return (
      <div className="flex items-center justify-center h-200">
        <h1 className="text-6xl">Loading data, please wait....</h1>
      </div>
    );

  return (
    <div className="container mx-auto my-5 p-2">
      <header>
        <h1 className="text-center text-2xl my-20">Lets catch Pokemon</h1>
      </header>
      <ul className="flex flex-wrap justify-center items-center">
        <li className="bg-gray-700 px-5 py-7 rounded-lg flex flex-col items-center gap-4 md:min-w-100 min-w-80">
          <figure>
            <img
              src={api.sprites.other.dream_world.front_default}
              alt={api.name}
            />
          </figure>
          <p className="text-2xl font-bold capitalize mt-2">{api.name}</p>
        </li>
      </ul>
    </div>
  );
};

export default CardStack;
