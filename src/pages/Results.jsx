import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  const query = new URLSearchParams(useLocation().search);
  const score = query.get("score");
  const total = query.get("total");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Quiz Completed 🎉</h1>
        <p className="text-lg mb-4">
          Your Score: {score} / {total}
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default Results;
