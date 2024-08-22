import { useState } from 'react';
import { quizData } from '../data/quizdata';

import Question from './Question.tsx';
import Options from './Options.tsx';

const Quiz: React.FC = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState<number>(0);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setIsAnswered(true);
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  if (currentQuestionIndex >= quizData.length) {
    return (
      <div>
        <h2 className="text-4xl mb-8">Quiz Complete!</h2>
        <p className="text-2xl">Your score: {score} out of {quizData.length}</p>
        <button className="mt-8 px-6 py-4 text-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full inline-block" onClick={handleRestartQuiz}>Restart Quiz</button>
      </div>
    );
  }

return (
    <div className="max-w-4xl">
      <progress className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:duration-500 [&::-webkit-progress-value]:rounded-lg mb-4 [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-orange-500 [&::-moz-progress-bar]:bg-orange-500" value={currentQuestionIndex + 1} max={quizData.length}></progress>
      <Question text={currentQuestion.text} />
      <div>
      </div>
      <Options
        options={currentQuestion.options}
        selectedAnswer={selectedAnswer}
        onAnswerSelection={handleAnswerSelection}
        isAnswered={isAnswered}
        questionId={currentQuestion.id}
      />
      {!isAnswered && (
        <button className="mt-8 px-6 py-4 text-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full inline-block" onClick={handleSubmit} disabled={!selectedAnswer}>
          Submit Answer
        </button> 
      )}

{isAnswered && (
        <div>
            {isCorrect ? <div className="flex items-center p-4 mt-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span className="sr-only">Info</span>
  <div>
    <span className="font-bold text-lg">Correct!</span>
  </div>
</div>: <div className="flex items-center p-4 mt-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
  <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span className="sr-only">Info</span>
  <div>
    <span className="font-bold text-lg">Incorrect, the correct answer is "{currentQuestion.correctAnswer}".</span> 
  </div>
</div> }
          {currentQuestionIndex < quizData.length - 1 ? (
             <button className="mt-8 px-6 py-4 text-lg bg-white text-gray-700 font-semibold rounded-full inline-block" onClick={handleNextQuestion}>Next Question</button>
          ) : (
            <button className="mt-8 px-6 py-4 text-lg bg-white text-gray-700 font-semibold rounded-full inline-block" onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>Finish Quiz</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;