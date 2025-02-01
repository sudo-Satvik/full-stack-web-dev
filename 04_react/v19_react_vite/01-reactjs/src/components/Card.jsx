const Card = () => {
  let name = "Grand Theft Auto VI";
  let description = `${name} is an action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2013's Grand Theft Auto V. Set within the fictional Vice City, based on Miami, the game follows a criminal named Ricardo, who seeks to rise through the ranks of the criminal underworld.`;
  let age = 21;
  let price = "$100";
  return (
    <>
      <div className="max-w-lg rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://preview.redd.it/the-full-gta-vi-reveal-artwork-directly-from-rockstars-v0-dkj530ewih4c1.png?width=1080&crop=smart&auto=webp&s=4230a67b10d2bff4780ef8f24df991235477c543"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="text-gray-400">{description}</p>
            <h2 className="text-5xl font-semibold mt-5">{price}</h2>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200 cursor-pointer hover:bg-gray-700"
          >
            {age >= 18 ? "Buy Now" : "Not eligible"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
