import { useNavigate } from "react-router-dom";

const ScoreSummary = ({ score, total }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Complete 🎉</h2>
        <p className="text-lg mb-4">
          Your Score: <strong>{score}</strong> / {total}
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Try Another Quiz
        </button>
      </div>
    </div>
  );
};

export default ScoreSummary;
