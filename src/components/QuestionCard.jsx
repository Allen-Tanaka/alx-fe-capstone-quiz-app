const decode = (str) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
};

const QuestionCard = ({ data, onAnswer, index, total }) => {
  const answers = [...data.incorrect_answers, data.correct_answer].sort(
    () => Math.random() - 0.5
  );

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-96">
      <p className="mb-2 text-gray-600">
        Question {index + 1} of {total}
      </p>

      <h2 className="font-semibold mb-4">
        {decode(data.question)}
      </h2>

      {answers.map((ans, i) => (
        <button
          key={i}
          onClick={() => onAnswer(ans === data.correct_answer)}
          className="block w-full mb-2 p-2 border rounded hover:bg-gray-100"
        >
          {decode(ans)}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
