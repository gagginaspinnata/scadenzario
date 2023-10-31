import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"

function App() {
  const url = 'http://localhost:3000/incomes'
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {data.map((income, index)=>{
        <p>{income.value}</p>
      })}
    </div>
  );
}

export default App;
