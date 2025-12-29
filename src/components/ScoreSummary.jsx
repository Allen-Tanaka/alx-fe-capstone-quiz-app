const ScoreSummary = ({ score, total, onRestart }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md text-center w-full max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Quiz Completed 🎉</h1>

      <p className="text-gray-700">
        You scored <strong>{score}</strong> out of <strong>{total}</strong>
      </p>

      <button
        onClick={onRestart}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
};

export default ScoreSummary;
