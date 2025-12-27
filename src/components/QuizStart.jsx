import { useEffect, useState } from "react";
import { fetchCategories } from "../services/triviaApi";
import { useNavigate } from "react-router-dom";

const QuizStart = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState("easy");
  const [amount, setAmount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  const startQuiz = () => {
    if (!category) {
      alert("Please select a category");
      return;
    }

    navigate(
      `/quiz?amount=${amount}&category=${category}&difficulty=${difficulty}`
    );
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-96">
      <h1 className="text-2xl font-bold mb-4 text-center">Quiz App</h1>

      <select
        className="w-full mb-3 p-2 border rounded"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <select
        className="w-full mb-3 p-2 border rounded"
        onChange={(e) => setCategory(e.target.value || null)}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <input
        type="number"
        min="1"
        max="20"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />

      <button
        onClick={startQuiz}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizStart;
