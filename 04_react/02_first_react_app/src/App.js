import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  let name = "Satvik";

  // Iterating using map
  let favGames = ["GTA Online", "BGMI", "Valorant", "CSGO"];

  // Using objects with proper key naming
  let myData = {
    fullName: "Satvik Sharma",
    age: 21,
    profession: "Web Developer"
  };

  // Using ternary operator
  let status = false;

  return (
    <div>
      <Header />
      <div>
        <h1>Hello {name}, how are you?</h1>
        <h2>My favourite games are:</h2>
        <ul>
          {favGames.map((game, index) => (
            <li key={index}>{game}</li> // Added key prop
          ))}
        </ul>
        <h1>My Data</h1>
        <p>My Full Name: {myData.fullName}</p>
        <p>My Age: {myData.age}</p>

        <h2>Is my data fetched?</h2>
        <div>
          {status ? (
            <h3 style={{ color: "green" }}>Yes</h3>
          ) : (
            <h3 style={{ color: "red" }}>No</h3>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
