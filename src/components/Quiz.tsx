import React from 'react';
import { quizData } from '../data/quizdata';

const Quiz = () => {

  return (
    <div>
      {quizData.map((quizItem, index) => (
        <div key={index}>
          <p>Question {index + 1}: {quizItem.text}</p>
          <ul>
            {quizItem.options.map((option, optIndex) => (
              <li key={optIndex}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Quiz;