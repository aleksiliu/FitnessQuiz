import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quiz from './StartQuiz';

describe('Quiz Component', () => {
  test('renders the first question', () => {
    render(<Quiz />);
    const questionElement = screen.getByText(/How often should an average adult engage in moderate-intensity aerobic physical activity/i);
    expect(questionElement).toBeInTheDocument();
  });

  test('allows selecting an answer', () => {
    render(<Quiz />);
    const answerOption = screen.getByLabelText('2.5 hours per week');
    fireEvent.click(answerOption);
    expect(answerOption).toBeChecked();
  });

  test('shows submit button when answer is selected', () => {
    render(<Quiz />);
    const answerOption = screen.getByLabelText('2.5 hours per week');
    fireEvent.click(answerOption);
    const submitButton = screen.getByText('Submit Answer');
    expect(submitButton).toBeEnabled();
  });

  test('displays correct feedback after submitting correct answer', () => {
    render(<Quiz />);
    const correctAnswer = screen.getByLabelText('2.5 hours per week');
    fireEvent.click(correctAnswer);
    const submitButton = screen.getByText('Submit Answer');
    fireEvent.click(submitButton);
    const feedback = screen.getByText('Correct!');
    expect(feedback).toBeInTheDocument();
  });

  test('displays incorrect feedback after submitting wrong answer', () => {
    render(<Quiz />);
    const wrongAnswer = screen.getByLabelText('1 hour per week');
    fireEvent.click(wrongAnswer);
    const submitButton = screen.getByText('Submit Answer');
    fireEvent.click(submitButton);
    const feedback = screen.getByText(/Incorrect, the correct answer is/i);
    expect(feedback).toBeInTheDocument();
  });
});