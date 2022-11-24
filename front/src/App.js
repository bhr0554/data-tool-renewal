import logo from './logo.svg';
import './App.css';
import axios from "axios";

const func = function  (obj) {
  obj.preventDefault();
  axios.get('http://localhost:8080/api/test').then(res => {
    console.log('res', res);
  });
}

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
          onClick={func}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
