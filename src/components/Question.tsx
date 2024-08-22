type QuestionProps = {
    text: string;
};
  
const Question: React.FC<QuestionProps> = ({ text }) => {
return <h2 className="text-4xl mb-8">{text}</h2>;
};
  
export default Question;
  