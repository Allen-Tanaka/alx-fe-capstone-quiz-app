import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchQuestions } from "../services/triviaApi";
import QuestionCard from "../components/QuestionCard";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const query = new URLSearchParams(useLocation().search);
  const amount = query.get("amount");
  const category = query.get("category");
  const difficulty = query.get("difficulty");

  useEffect(() => {
    fetchQuestions(amount, category, difficulty).then(setQuestions);
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      navigate(`/results?score=${score}&total=${questions.length}`);
    }
  };

  if (!questions.length) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <QuestionCard
        data={questions[current]}
        onAnswer={handleAnswer}
        index={current}
        total={questions.length}
      />
    </div>
  );
};

export default Quiz;
