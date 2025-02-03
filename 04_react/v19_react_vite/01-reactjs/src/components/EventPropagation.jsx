const EventPropagation = () => {
  const handleGrandParentClick = () => {
    console.log("Grand Parent Clicked");
  };
  const handleParentClick = () => {
    console.log("Parent Clicked");
  };
  const handleChildClick = () => {
    console.log("Child Clicked");
  };
  return (
    <>
      <h1 className="text-4xl ml-4">Event Propagation</h1>

      <div className="container bg-black mx-auto p-10 text-white mt-5">
        {/* Event Bubbling is by default */}
        <h2 className="text-2xl">Event Bubbling</h2>
        <div className="p-1" onClick={handleGrandParentClick}>
          <div className="p-1" onClick={handleParentClick}>
            <button
              className="btn bg-violet-700 py-2 px-10 cursor-pointer rounded-md hover:bg-violet-800 duration-150"
              onClick={handleChildClick}
            >
              Click Me to bubble
            </button>
          </div>
        </div>

        {/* Use on____Capture to parent element... */}
        <h2 className="text-2xl">Event Capturing</h2>
        <div className="p-1" onClickCapture={handleGrandParentClick}>
          <div className="p-1" onClick={handleParentClick}>
            <button
              className="btn bg-violet-700 py-2 px-10 cursor-pointer rounded-md hover:bg-violet-800 duration-150"
              onClick={handleChildClick}
            >
              Click Me to capture
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPropagation;
