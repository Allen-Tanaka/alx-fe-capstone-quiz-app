const QuizStart = ({
  categories,
  allCategories,
  category,
  setCategory,
  difficulty,
  setDifficulty,
  amount,
  setAmount,
  searchTerm,
  setSearchTerm,
  onStart,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Quiz App</h1>

      {/* Search Bar */}
      <div className="space-y-2">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm"
            >
              Clear
            </button>
          )}
        </div>
        {searchTerm && (
          <p className="text-sm text-gray-600">
            {categories.length} of {allCategories.length} categories found
          </p>
        )}
      </div>

      {/* Category */}
      <div className="space-y-2">
        <select
          className="w-full p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={categories.length === 0 && searchTerm !== ""}
        >
          <option value="">
            {categories.length === 0 && searchTerm !== "" 
              ? "No categories available" 
              : "Select Category"}
          </option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        {searchTerm && categories.length === 0 && (
          <p className="text-sm text-red-600">
            No categories match your search. Try a different keyword.
          </p>
        )}
      </div>

      {/* Difficulty */}
      <select
        className="w-full p-2 border rounded"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      {/* Number of Questions */}
      <input
        type="number"
        min="5"
        max="20"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="w-full p-2 border rounded"
        placeholder="Number of Questions (5–20)"
      />

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
