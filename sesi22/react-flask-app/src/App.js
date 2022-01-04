import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [currTime, setCurrTime] = useState(0);

  const [message, setMessage] = useState('Hi');

  useEffect(() => {
    fetch('/hello').then(res => res.json()).then(data => {
      setMessage(data.message)
    })
    

    const timeInterval = setInterval(() => {
      fetch('/time')
      .then(res => res.json())
      .then(data => setCurrTime(data.time))
    },1000);

    return () => {
      clearInterval(timeInterval)
    }
  }, []);


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
        <p>Flask says {message}</p>
        <p>The current time is : <code>{currTime && new Date(currTime * 1000).toString()}</code></p>
      </header>
    </div>
  );
}

export default App;
