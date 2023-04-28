import './App.css';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let intervalId;

  function startTimer() {
    setInterval(() => {
      setTime(prevTime => prevTime +1);
    }, 1000);
  }

  function stopTimer() {
    setIsRunning(false);
    clearInterval(intervalId)
  }

  function resetTimer() {
    setIsRunning(false);
    setTime(0);
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