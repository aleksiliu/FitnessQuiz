import React, { useState } from 'react';
import { quizData } from '../data/quizdata';

const Quiz = () => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    setIsCorrect(selectedAnswer === currentQuestion.correctAnswer);
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

return (
    <div>
      <h2>{currentQuestion.text}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              name={`quiz-option-${currentQuestion.id}`}
              onChange={() => handleAnswerSelection(option)}
              checked={selectedAnswer === option}
            />
            <label>{option}</label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} disabled={!selectedAnswer}>
        Submit Answer
      </button>
      {isAnswered && (
        <div>
          {isCorrect ? <p>Correct!</p> : <p>Incorrect, the correct answer is "{currentQuestion.correctAnswer}".</p>}
          {currentQuestionIndex < quizData.length - 1 && (
            <button onClick={handleNextQuestion}>Next Question</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;