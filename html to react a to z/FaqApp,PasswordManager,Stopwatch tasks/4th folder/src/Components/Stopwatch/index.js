import React, { useState, useEffect } from 'react';
import './index.css'



function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const start = () => {
    setIsRunning(!isRunning);
  };
  const stop = () => {
    setIsRunning(!isRunning);
  };
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };
  const getStopWatchDisplay = () => {
    const stringifyMinutes = Math.floor(time/ 60);
    const stringifySeconds = time % 60;

    const minutes = stringifyMinutes > 9 ? stringifyMinutes : `0${stringifyMinutes}`;
    const seconds = stringifySeconds > 9 ? stringifySeconds : `0${stringifySeconds}`;

    return `${minutes}:${seconds}`;
  };
  return (
    <div className='clock-container'>
      <div className='containers'>
        <h1 className='heading'>STOPWATCH</h1>
        <h3 className='count'>seconds-count</h3>
        <p className='para '>{getStopWatchDisplay()}</p>
        {/* <p className='para'>Time: {time} seconds</p> */}
        <button className='btn-button' onClick={start}>start</button>
        <button className='btn-button-1' onClick={stop}>stop</button>
        <button className='button' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
// {isRunning ? 'Stop' : 'Start'}