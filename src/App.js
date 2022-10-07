import "./styles.css";
import data from "./data.json";
import { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [showQst, setShowQst] = useState(true);

  const handleScore = (isCorrect) => {
    if (isCorrect === true) {
      let totalScore = score + 1;
      setScore(totalScore);
    }
    let currentInx = index + 1;
    if (currentInx < data.length) {
      setIndex(currentInx);
    } else {
      setShowQst(false);
    }
  };

  const handleReset = () => {
    setShowQst(true);

    setIndex(0);
    setScore(0);
  };

  return (
    <div className="App">
      <div className="card">
        {showQst ? (
          <div>
            <h2 className="main-head">Quiz Project</h2>
            <div className="head">
              <h3>
                {index + 1}/{data.length} Question
              </h3>
            </div>
            <div className="qstText">
              <p>{data[index].quetionText}</p>
            </div>
            <div className="qstoption">
              {data[index].ansOption.map((val) => (
                <div>
                  <button
                    onClick={() => handleScore(val.isCorrect, index)}
                    className="btn"
                  >
                    {val.ansText}
                  </button>
                </div>
              ))}
              <div>
                <button onClick={handleReset} className="btn1">
                  Restart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div>
              Your Score is {score} out of {data.length}
            </div>
            <button onClick={handleReset} className="btn1">
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
