import { useState, useEffect } from "react";

const QuestionCard = ({ question, answers, correctAnswer, onNext }) => {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Reset state when component mounts (new question)
  useEffect(() => {
    console.log("QuestionCard mounted for question:", question);
    console.log("Available answers:", answers);
    setSelected(null);
    setShowResult(false);
  }, [question]); // Reset when question changes

  const handleAnswerSelect = (answer) => {
    console.log("Answer selected:", answer);
    if (!showResult) {
      setSelected(answer);
    }
  };

  const handleNext = () => {
    console.log("Handle next called, selected:", selected);
    if (!selected) {
      console.log("No answer selected, returning");
      return; // Don't proceed if nothing selected
    }
    
    setShowResult(true);
    // Wait a moment to show the result, then proceed
    setTimeout(() => {
      console.log("Calling onNext with:", selected);
      onNext(selected);
    }, 1500);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-xl w-full space-y-4">
      <h2
        className="text-lg font-semibold"
        dangerouslySetInnerHTML={{ __html: question }}
      />

      <div className="space-y-3">
        {answers.map((answer, index) => {
          let style = "bg-gray-100 hover:bg-gray-200";

          if (showResult) {
            if (answer === correctAnswer) {
              style = "bg-green-500 text-white";
            } else if (answer === selected && answer !== correctAnswer) {
              style = "bg-red-500 text-white";
            } else {
              style = "bg-gray-200";
            }
          } else if (selected === answer) {
            style = "bg-blue-500 text-white"; // Selected answer in blue before submission
          }

          return (
            <button
              key={index}
              disabled={showResult}
              onClick={() => handleAnswerSelect(answer)}
              className={`w-full p-3 rounded transition-colors ${style}`}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>

      {selected && !showResult && (
        <div className="flex gap-3">
          <button
            onClick={handleNext}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit Answer
          </button>
          <button
            onClick={() => setSelected(null)}
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
          >
            Clear Selection
          </button>
        </div>
      )}

      {showResult && (
        <div className="text-center">
          <p className="text-lg font-semibold">
            {selected === correctAnswer ? "✅ Correct!" : "❌ Incorrect"}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Moving to next question...
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;