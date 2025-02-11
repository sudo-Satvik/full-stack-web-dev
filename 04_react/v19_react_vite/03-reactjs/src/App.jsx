import ShortCircuit from "./components/ShortCircuit";
import Effect from "./hooks/Effect";
import Effect2 from "./hooks/Effect2";
import Effect3 from "./hooks/Effect3";
import State from "./hooks/State";

function App() {
  return (
    <>
      <h1>Short Circuit Example</h1>
      <ShortCircuit />
      <hr />
      <h1 style={{ textAlign: "center" }}>UseState Advance Counter App</h1>
      <State />
      <hr />
      <h1 style={{ textAlign: "center" }}>UseEffect Hook</h1>
      <Effect />
      <h2 style={{ textAlign: "center" }}>UseEffect Hook Challenge</h2>
      <Effect2 />
      <h2 style={{ textAlign: "center" }}>UseEffect Cleanup Function</h2>
      <Effect3 />
    </>
  );
}

export default App;
