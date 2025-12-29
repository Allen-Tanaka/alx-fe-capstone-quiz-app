export default function ScoreSummary({ score, total, onRestart }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md text-center w-full max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Quiz Completed 🎉</h1>

      <p className="text-gray-700">
        You scored <span className="font-semibold">{score}</span> out of{" "}
        <span className="font-semibold">{total}</span>
      </p>

      <button
        onClick={onRestart}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
}
