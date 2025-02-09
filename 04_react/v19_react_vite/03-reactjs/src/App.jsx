import ShortCircuit from "./components/ShortCircuit";
import Effect from "./hooks/Effect";
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
    </>
  );
}

export default App;
