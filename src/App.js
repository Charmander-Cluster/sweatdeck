import logo from "./logo.svg";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="bg-teal-500 shadow-lg font-bold py-2 px-4 rounded">
          Hello
        </button>
      </header>
    </div>
  );
}

export default App;
