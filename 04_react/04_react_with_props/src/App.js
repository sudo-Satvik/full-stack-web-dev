import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <h2>Props 1st way</h2>
      <Greeting name = "Satvik" age = "21" />

      <h2>Props 2nd way</h2>
    </div>
  );
}

export default App;
