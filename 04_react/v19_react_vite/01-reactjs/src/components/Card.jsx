// eslint-disable-next-line react/prop-types
const Card = ({ img, name, description, price }) => {
  let age = 21;
  return (
    <div className="w-sm rounded-md shadow-md bg-black text-gray-100">
      <img
        src={img || "https://placehold.co/600x400"}
        alt={name}
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
            {name || "Unknown Product"}
          </h2>
          <p className="text-gray-400">
            {description || "No description available."}
          </p>
          <h2 className="text-5xl font-semibold mt-5">
            ${price?.toLocaleString() || "N/A"}
          </h2>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200 cursor-pointer hover:bg-gray-700"
        >
          {age >= 18 ? "Buy Now" : "Not eligible"}
        </button>
      </div>
    </div>
  );
};

export default Card;
