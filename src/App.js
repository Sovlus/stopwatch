import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef();

  function startTimer() {
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime +1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
  }

  function resetTimer() {
    setTime(0);
    clearInterval(intervalRef.current);
  }

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;
