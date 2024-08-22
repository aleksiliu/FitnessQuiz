import { useState } from 'react';
import { quizData } from '../data/quizdata';

import Question from './Question.tsx';
import Options from './Options.tsx';
import Result from './Result.tsx';

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

  const handleFinishQuiz = () => {
    setCurrentQuestionIndex(quizData.length);
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
        <Result
          isCorrect={isCorrect}
          correctAnswer={currentQuestion.correctAnswer}
          isLastQuestion={currentQuestionIndex >= quizData.length - 1}
          onNextQuestion={handleNextQuestion}
          onFinishQuiz={handleFinishQuiz}
        />
      )}
    </div>
  );
};

export default Quiz;