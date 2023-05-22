import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const intervalRef = useRef();

  function startTimer() {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        const seconds = prevTime.seconds + 1;
        const minutes = prevTime.minutes + Math.floor(seconds / 60);
        const hours = prevTime.hours + Math.floor(minutes / 60);

        return { hours, minutes: minutes % 60, seconds: seconds % 60 };
      });
    }, 1000);
  }
  function stopTimer() {
    clearInterval(intervalRef.current);
  }

  function resetTimer() {
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    clearInterval(intervalRef.current);
  }

  return (
    <div className='back'>
      <h1 className='timer'>
        {time.hours.toString().padStart(2, "0")}:
        {time.minutes.toString().padStart(1, "0")}:
        {time.seconds.toString().padStart(1, "0")}
      </h1>
      <div className='btns'>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
