import { useEffect, useState } from "react";
import "./index.scss";

const App = () => {
  const choices = ["✊", "✋", "✌️"];

  const [choice, setChoice] = useState<string>("");
  const [computerChoice, setComputerChoice] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);

  function handleChoice(option: string) {
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
    setChoice(option);
  }

  function checkAnswer() {
    switch (choice + computerChoice) {
      case "✌️✋":
      case "✊✌️":
      case "✋✊":
        setScore(score + 1);
        break;
      case "✋✌️":
      case "✌️✊":
      case "✊✋":
        setComputerScore(computerScore + 1);
        break;
    }
  }

  useEffect(() => {
    checkAnswer();
  }, [computerChoice, choice]);

  return (
    <div className="container">
      <h1 className="title">Rock Paper Scissors</h1>
      <div className="main-container">
        <div className="main-container-child">
          <h3>You: {score}</h3>
          <h1>{choice}</h1>
        </div>
        <div className="main-container-child">
          <h3>Computer: {computerScore}</h3>
          <h1>{computerChoice}</h1>
        </div>
      </div>
      <div className="choices">
        {choices.map((choice: string, id: number) => {
          return (
            <div key={id}>
              <button onClick={() => handleChoice(choice)}>{choice}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
