import './App.css';
import Employee from './components/Employee';
import Greeting from './components/Greeting';

function App() {
  let employeeData = {
    'eName' : "Satvik", 
    'cName' : "Google",
    'sAmount' : "2,00,000"
  }
  return (
    <div className="App">
      <h2>Props 1st way</h2>
      <Greeting name = "Satvik" age = "21" />
      
      <h2>Props 2nd way</h2>
      <Employee employeeData={employeeData} />
    </div>
  );
}

export default App;
