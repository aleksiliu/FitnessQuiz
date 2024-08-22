type OptionsProps = {
    options: string[];
    selectedAnswer: string | null;
    onAnswerSelection: (answer: string) => void;
    isAnswered: boolean;
    questionId: number;
  };
  
  const Options: React.FC<OptionsProps> = ({ options, selectedAnswer, onAnswerSelection, isAnswered, questionId }) => {
    return (
      <ul className="grid grid-cols-2 gap-4">
        {options.map((option, index) => (
          <li key={index}>
            <label className="block p-4 border bg-white border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 text-gray-700">
              <input
                type="radio"
                name={`quiz-option-${questionId}`}
                onChange={() => onAnswerSelection(option)}
                checked={selectedAnswer === option}
                disabled={isAnswered}
              />
              <span className='ml-2'>{option}</span>
            </label>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Options;
  