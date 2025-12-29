import { useEffect, useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import QuestionCard from "../components/QuestionCard";
import ScoreSummary from "../components/ScoreSummary";
import { fetchQuestions, resetSessionToken } from "../services/triviaApi";

const QuizPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasLoadedRef = useRef(false);

  const amount = searchParams.get("amount");
  const category = searchParams.get("category");
  const difficulty = searchParams.get("difficulty");

  console.log("QuizPage params:", { amount, category, difficulty });

  useEffect(() => {
    const loadQuestions = async () => {
      if (hasLoadedRef.current) {
        return; // Already loaded
      }
      
      // Validate parameters
      if (!amount || !category || !difficulty) {
        setError("Missing quiz parameters. Please go back and select all options.");
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        setError(null);
        hasLoadedRef.current = true;
        
        console.log("Loading questions with params:", { amount, category, difficulty });
        const data = await fetchQuestions({
          amount: parseInt(amount),
          category: parseInt(category),
          difficulty,
        });
        
        if (data && data.length > 0) {
          console.log("Questions loaded:", data.length);
          setQuestions(data);
        } else {
          setError("No questions found. Try different difficulty or category settings.");
        }
      } catch (err) {
        console.error("Error loading questions:", err);
        setError(`Error: ${err.message || "Failed to load questions. Please try again."}`);
        hasLoadedRef.current = false; // Allow retry on error
      } finally {
        setLoading(false);
      }
    };

    if (amount && category && difficulty && !hasLoadedRef.current) {
      loadQuestions();
    }
  }, [amount, category, difficulty]);

  if (loading) {
    return (
      <Layout>
        <div className="text-center">
          <p className="text-xl">Loading questions...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    const handleBackHome = () => {
      resetSessionToken();
      hasLoadedRef.current = false; // Reset for new quiz
      navigate("/");
    };

    return (
      <Layout>
        <div className="bg-white p-6 rounded-xl shadow-md text-center space-y-4">
          <p className="text-red-600 text-lg">{error}</p>
          <button
            onClick={handleBackHome}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      </Layout>
    );
  }

  if (currentIndex >= questions.length) {
    const handleRestart = () => {
      resetSessionToken();
      hasLoadedRef.current = false; // Reset for new quiz
      navigate("/");
    };

    return (
      <Layout>
        <ScoreSummary
          score={score}
          total={questions.length}
          onRestart={handleRestart}
        />
      </Layout>
    );
  }

  const current = questions[currentIndex];
  const answers = [
    current.correct_answer,
    ...current.incorrect_answers,
  ].sort(() => Math.random() - 0.5);

  const handleNext = (selected) => {
    if (selected === current.correct_answer) {
      setScore(score + 1);
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <Layout>
      <QuestionCard
        question={current.question}
        answers={answers}
        correctAnswer={current.correct_answer}
        onNext={handleNext}
      />
      <div className="mt-4 text-center text-white">
        <p>Question {currentIndex + 1} of {questions.length}</p>
      </div>
    </Layout>
  );
};

export default QuizPage;
