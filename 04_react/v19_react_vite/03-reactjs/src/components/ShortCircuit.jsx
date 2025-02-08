import { useState } from "react";
const ShortCircuit = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");
  return (
    <div>
      {/* Conditional rendering using short circuit evaluation */}
      <h3 style={{ marginLeft: "20px" }}>{isLoggedIn && "You are loggedIn"}</h3>
      <br />
      <p style={{ marginLeft: "20px" }}>
        {user ? `Hello ${user}` : "Please login"}
      </p>
      <div>
        <button
          style={{ margin: "10px" }}
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          Toggle Login State
        </button>
        <button style={{ margin: "10px" }} onClick={() => setUser("Satvik")}>
          Set your name
        </button>
        <button style={{ margin: "10px" }} onClick={() => setUser("")}>
          Remove your name
        </button>
      </div>
    </div>
  );
};

export default ShortCircuit;
