import { useEffect, useState } from "react";

const CardStack = () => {
  const [api, setApi] = useState(null);
  const [loadingState, setLoadingState] = useState(true);
  const [errorState, setErrorState] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon/ditto";

  // const fetchApi = () => {
  //   setTimeout(() => {
  //     fetch(API)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setApi(data);
  //         setLoadingState(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setErrorState(err);
  //         setLoadingState(false);
  //       });
  //   }, 1000);
  // };

  const fetchApi = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setApi(data);
      setLoadingState(false);
    } catch (err) {
      console.log(err);
      setErrorState(err);
      setLoadingState(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // Error handling
  if (loadingState)
    return (
      <div className="flex items-center justify-center h-200">
        <h1 className="text-6xl">Loading data, please wait....</h1>
      </div>
    );
  if (errorState)
    return (
      <div className="flex items-center justify-center h-200">
        <h1 className="text-6xl">Error: {errorState.message}</h1>
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
          <div className="grid grid-cols-3 gap-3">
            <p className="bg-blue-500 p-3 text-center rounded-full cursor-pointer">
              Height: <span>{api.height}</span>
            </p>
            <p className="bg-blue-500 p-3 text-center rounded-full cursor-pointer">
              Weight: <span>{api.weight}</span>
            </p>
            <p className="bg-blue-500 p-3 text-center rounded-full cursor-pointer">
              Speed: <span>{api.stats[5].base_stat}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CardStack;
