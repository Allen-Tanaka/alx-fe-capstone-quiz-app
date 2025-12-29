import { useState } from "react";

const QuestionCard = ({ question, answers, correctAnswer, onNext }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-xl w-full space-y-4">
      <h2
        className="text-lg font-semibold"
        dangerouslySetInnerHTML={{ __html: question }}
      />

      <div className="space-y-3">
        {answers.map((answer, index) => {
          let style = "bg-gray-100 hover:bg-gray-200";

          if (selected) {
            if (answer === correctAnswer) style = "bg-green-500 text-white";
            else if (answer === selected) style = "bg-red-500 text-white";
          }

          return (
            <button
              key={index}
              disabled={selected}
              onClick={() => setSelected(answer)}
              className={`w-full p-3 rounded ${style}`}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>

      {selected && (
        <button
          onClick={() => onNext(selected)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default QuestionCard;