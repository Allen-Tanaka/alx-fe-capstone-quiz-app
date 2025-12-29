import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import QuestionCard from "../components/QuestionCard";
import ScoreSummary from "../components/ScoreSummary";

export default function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    fetch(`https://opentdb.com/api.php${search}&type=multiple`)
      .then(res => res.json())
      .then(data => setQuestions(data.results));
  }, [search]);

  if (!questions.length) {
    return (
      <Layout>
        <p className="text-red-500">No questions available.</p>
      </Layout>
    );
  }

  if (index >= questions.length) {
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

  const q = questions[index];
  const answers = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5);

  return (
    <Layout>
      <QuestionCard
        question={q.question}
        answers={answers}
        correctAnswer={q.correct_answer}
        onNext={(selected) => {
          if (selected === q.correct_answer) setScore(prev => prev + 1);
          setIndex(prev => prev + 1);
        }}
      />
    </Layout>
  );
}
