import { useEffect, useState } from "react";
import "./App.css";
const getRandomColor = () => {
  const digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "F",
  ];
  const number = new Array(6)
    .fill("")
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join("");
  return `#${number}`;
};

function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [answerIndicator, setAnswerIndicator] = useState(undefined);

  const generateColor = () => {
    const answerColor = getRandomColor();
    setColor(answerColor);
    setAnswers(
      [answerColor, getRandomColor(), getRandomColor()].sort(
        () => Math.random() - 0.5
      )
    );
  };
  useEffect(() => {
    generateColor();
  }, []);

  const chooseAnswer = (answer) => {
    if (answer === color) {
      setAnswerIndicator(false);
      generateColor();
    } else {
      setAnswerIndicator(true);
    }
  };

  return (
    <div className="wrap">
      <div className="box" style={{ backgroundColor: color }}></div>
      <section>
        {answers.map((answer) => (
          <button onClick={() => chooseAnswer(answer)} key={answer}>
            {answer}
          </button>
        ))}
        {answerIndicator === true && <p className="wrong">Wrong Answer!!</p>}
        {answerIndicator === false && <p className="correct">Correct!!</p>}
      </section>
    </div>
  );
}

export default App;
