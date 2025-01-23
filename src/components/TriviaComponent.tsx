import React, { useState } from "react";

const TriviaComponent: React.FC = () => {
  const questions = [
    {
      question: "What was Wernher von Braun’s major contribution to space exploration?",
      options: [
        "He designed the Saturn V rocket that took humans to the Moon.",
        "He was the first astronaut to walk on the Moon.",
        "He discovered Pluto.",
        "He built the Hubble Space Telescope."
      ],
      correctAnswer: 0
    },
    {
      question: "Before working for NASA, von Braun was involved in developing rockets for which country?",
      options: ["The United States", "Germany", "The Soviet Union", "France"],
      correctAnswer: 1
    },
    {
      question: "What was the name of the rocket von Braun developed for NASA that helped land astronauts on the Moon?",
      options: ["Apollo 11", "V-2", "Falcon 9", "Saturn V"],
      correctAnswer: 3
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);

    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Trivia Completed! You scored ${score} out of ${questions.length}.`);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <div className="trivia-container">
      <h2>🚀 Wernher von Braun Trivia</h2>
      <p>{questions[currentQuestion].question}</p>
      <div className="options-container">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedAnswer !== null ? (index === questions[currentQuestion].correctAnswer ? "correct" : "incorrect") : ""}`}
            onClick={() => handleAnswerClick(index)}
            disabled={showResult}
          >
            {option}
          </button>
        ))}
      </div>

      {showResult && (
        <div className="result-message">
          {selectedAnswer === questions[currentQuestion].correctAnswer ? (
            <p className="correct-message">✅ Correct!</p>
          ) : (
            <p className="incorrect-message">❌ Incorrect. The correct answer is: <b>{questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}</b></p>
          )}
          <button onClick={handleNextQuestion} className="next-button">Next Question</button>
        </div>
      )}
    </div>
  );
};

export default TriviaComponent;