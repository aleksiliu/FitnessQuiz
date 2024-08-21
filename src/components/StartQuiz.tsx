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
    <div className="max-w-4xl">
      <h2 className="text-4xl mb-8">{currentQuestion.text}</h2>
      <ul className="grid grid-cols-2 gap-4 ">
        {currentQuestion.options.map((option, index) => (
          <li key={index}> 
  <label className="block p-4 border bg-white border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 text-gray-700">
  <input
              type="radio"
              name={`quiz-option-${currentQuestion.id}`}
              onChange={() => handleAnswerSelection(option)}
              checked={selectedAnswer === option}
              disabled={isAnswered}
            />
      <span className='ml-2'>{option}</span>
  </label>
       
          </li>
        ))}
      </ul>
      {!isAnswered && (
        <button className="mt-8 px-6 py-4 text-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full inline-block" onClick={handleSubmit} disabled={!selectedAnswer}>
          Submit Answer
        </button> 
      )}
      {isAnswered && (
        <div>
          {isCorrect ? <p className="text-lg mt-4"> Correct!</p> : <p className="text-lg mt-4">Incorrect, the correct answer is "{currentQuestion.correctAnswer}".</p>}
          {currentQuestionIndex < quizData.length - 1 && (
            <button className="mt-8 px-6 py-4 text-lg bg-white hover:bg-orange-600 text-gray-700 font-semibold rounded-full inline-block" onClick={handleNextQuestion}>Next Question</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;