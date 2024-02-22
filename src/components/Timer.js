import { useState } from "react";
import { NavLink } from "react-router-dom";

const Timer = () => {
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isTimerFinished, setIsTimerFinished] = useState(false);

  const handleInputChange = (event) => {
    setMinutes(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      startTimer();
    }
  };

  const startTimer = () => {
    if (!isNaN(minutes) && minutes > 0) {
      setIsTimerFinished(true);
      setIsRunning(true);
      let totalSeconds = parseInt(minutes) * 60;

      const countdown = () => {
        if (totalSeconds <= 0) {
          setIsRunning(false);
          setIsTimerFinished(true);
        } else {
          const updatedMinutes = Math.floor(totalSeconds / 60);
          const updatedSeconds = totalSeconds % 60;
          setMinutes(updatedMinutes);
          setSeconds(updatedSeconds);
          totalSeconds--;
          setTimeout(countdown, 1000);
        }
      };

      countdown();
    }
  };
  return (
    <>
      <NavLink to="/palette">palette</NavLink>
      <div className="timer-container">
        {isRunning ? (
          <div>
            <p className="timer-text">
              Оставшееся время:{" "}
              <span className="timer">
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
              </span>
            </p>
          </div>
        ) : isTimerFinished ? (
          <div>
            <p className="timer-result">Готово!</p>
          </div>
        ) : (
          <div>
            <input
              className="timer-input"
              type="number"
              value={minutes}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Введите минуты"
            />
            <button className="timer-btn" onClick={startTimer}>
              click
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Timer;
