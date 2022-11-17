import "./index.scss";

const App = () => {
  const choices = ["✊", "✋", "✌️"];

  return (
    <div className="container">
      <h1 className="title">Rock Paper Scissors</h1>
      <div className="main-container">
        <div className="main-container-child">
          <h3>You: 0</h3>
        </div>
        <div className="main-container-child">
          <h3>Computer: 0</h3>
        </div>
      </div>
      <div className="choices">
        {choices.map((choice: string) => {
          return (
            <div>
              <button>{choice}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
