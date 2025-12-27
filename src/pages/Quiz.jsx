import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import ScoreSummary from "../components/ScoreSummary";
import { fetchQuestions } from "../services/triviaApi";

const Quiz = () => {
  const [params] = useSearchParams();
  const amount = params.get("amount");
  const category = params.get("category");
  const difficulty = params.get("difficulty");

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true);
      setError(null);
      const result = await fetchQuestions(amount, category, difficulty);
      setQuestions(result.questions);
      setError(result.error);
      setLoading(false);
    };

    loadQuestions();
  }, [amount, category, difficulty]);

  // 🟡 Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading questions...</p>
      </div>
    );
  }

  // 🔴 Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // 🔴 No questions returned
  if (!loading && questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">
          No questions available. Please try another category.
        </p>
      </div>
    );
  }

  // 🟢 Show score
  if (showScore) {
    return <ScoreSummary score={score} total={questions.length} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <QuestionCard
        question={questions[currentIndex]}
        current={currentIndex + 1}
        total={questions.length}
        onAnswer={(isCorrect) => {
          if (isCorrect) setScore(score + 1);

          const next = currentIndex + 1;
          if (next < questions.length) {
            setCurrentIndex(next);
          } else {
            setShowScore(true);
          }
        }}
      />
    </div>
  );
};

export default Quiz;
