import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import QuestionCard from "../components/QuestionCard";
import ScoreSummary from "../components/ScoreSummary";
import { fetchQuestions } from "../services/triviaApi";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(search);

    fetchQuestions({
      amount: params.get("amount"),
      category: params.get("category"),
      difficulty: params.get("difficulty"),
    }).then(setQuestions);
  }, [search]);

  if (!questions.length) {
    return (
      <Layout>
        <p className="text-red-500">No questions available.</p>
      </Layout>
    );
  }

  if (currentIndex >= questions.length) {
    return (
      <Layout>
        <ScoreSummary
          score={score}
          total={questions.length}
          onRestart={() => navigate("/")}
        />
      </Layout>
    );
  }

  const currentQuestion = questions[currentIndex];
  const answers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ].sort(() => Math.random() - 0.5);

  const handleNext = (selected) => {
    if (selected === currentQuestion.correct_answer) {
      setScore((prev) => prev + 1);
    }
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <Layout>
      <QuestionCard
        question={currentQuestion.question}
        answers={answers}
        correctAnswer={currentQuestion.correct_answer}
        onNext={handleNext}
      />
    </Layout>
  );
};

export default QuizPage;
