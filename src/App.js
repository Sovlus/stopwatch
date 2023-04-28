import './App.css';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  let intervalId;

  function startTimer() {
    intervalId = setInterval(() => {
      setTime(prevTime => prevTime +1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalId)
  }

  function resetTimer() {
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
