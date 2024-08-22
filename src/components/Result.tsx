import React from 'react';

type ResultProps = {
  isCorrect: boolean;
  correctAnswer: string;
  isLastQuestion: boolean;
  onNextQuestion: () => void;
  onFinishQuiz: () => void;
};

const Result: React.FC<ResultProps> = ({
  isCorrect,
  correctAnswer,
  isLastQuestion,
  onNextQuestion,
  onFinishQuiz,
}) => {
  return (
    <div>
      {isCorrect ? (
        <div
          className="flex items-center p-4 mt-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div>
            <span className="font-bold text-lg">Correct!</span>
          </div>
        </div>
      ) : (
        <div
          className="flex items-center p-4 mt-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div>
            <span className="font-bold text-lg">Incorrect, the correct answer is "{correctAnswer}".</span>
          </div>
        </div>
      )}
      {isLastQuestion ? (
        <button
          className="mt-8 px-6 py-4 text-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full inline-block"
          onClick={onFinishQuiz}
        >
          Finish Quiz
        </button>
      ) : (
        <button
          className="mt-8 px-6 py-4 text-lg bg-white text-gray-700 font-semibold rounded-full inline-block"
          onClick={onNextQuestion}
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default Result;
