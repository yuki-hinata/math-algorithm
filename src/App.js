import logo from './logo.svg';
import './App.css';
import PrimeNumber from "./algorithm/PrimeNumber";
import PrimeFactorization from "./algorithm/PrimeFactorization";
import FactorialNumber from "./algorithm/FactorialNumber";

function App() {
  console.log(FactorialNumber(5));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Learn algorithm</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
