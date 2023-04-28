import './App.css';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState(0);

  function startTimer() {
    setInterval(() => {
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
      {}
    </div>
  );
}

export default App;