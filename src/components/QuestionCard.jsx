const QuestionCard = ({ question, current, total, onAnswer }) => {
  if (!question) return null;

  const answers = [...question.incorrect_answers, question.correct_answer]
    .sort(() => Math.random() - 0.5);

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
      <p className="text-sm text-gray-500 mb-2">
        Question {current} of {total}
      </p>

      <h3
        className="text-lg font-semibold mb-4"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />

      <div className="space-y-2">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(answer === question.correct_answer)}
            className="w-full p-2 border rounded hover:bg-blue-100"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
