export const EventHandling = () => {
  const handleClick = (event) => {
    console.log(event);
  };
  return (
    <>
      {/*  Using Function components with named function */}
      <button className="btn bg-blue-500 px-4 py-3 m-10" onClick={handleClick}>
        Click me
      </button>
      {/* Using Function components with Fat Arrow Function */}
      {/* SyntheticBaseEvent won't be called here by default, but we have to explicitly define here*/}
      {/* We can use this for passing argument in the function */}
      <button
        className="btn bg-blue-500 px-4 py-3 m-10"
        onClick={(event) => handleClick(event)}
      >
        Click me 2
      </button>

      {/* Inline event handler or using function components with anonymous function */}
      <button
        className="btn bg-blue-500 px-4 py-3 m-10"
        onClick={(event) => {
          console.log(event);
        }}
      >
        Click me 3
      </button>
    </>
  );
};
