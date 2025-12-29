const QuizStart = ({
  categories,
  category,
  setCategory,
  difficulty,
  setDifficulty,
  onStart,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Quiz App</h1>

      <select
        className="w-full p-2 border rounded"
        value={category}
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
        className="w-full p-2 border rounded"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button
        onClick={onStart}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizStart;
