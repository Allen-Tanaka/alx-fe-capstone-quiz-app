const ScoreSummary = ({ score, total, results, onRestart }) => {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-4xl space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Quiz Completed! 🎉</h1>
        <div className="text-2xl font-semibold">
          <span className="text-blue-600">{score}</span> out of <span className="text-gray-600">{total}</span>
        </div>
        <div className="text-lg text-gray-500 mt-1">
          {percentage}% Correct
        </div>
      </div>

      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Question Review</h2>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <div key={index} className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-start gap-3">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                  result.isCorrect ? 'bg-green-500' : 'bg-red-500'
                }`}>
                  {result.isCorrect ? '✓' : '✗'}
                </div>
                <div className="flex-1">
                  <h3
                    className="font-medium mb-2"
                    dangerouslySetInnerHTML={{ __html: result.question }}
                  />
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="font-medium">Your answer:</span>{' '}
                      <span
                        className={result.isCorrect ? 'text-green-600' : 'text-red-600'}
                        dangerouslySetInnerHTML={{ __html: result.selectedAnswer }}
                      />
                    </p>
                    {!result.isCorrect && (
                      <p>
                        <span className="font-medium">Correct answer:</span>{' '}
                        <span
                          className="text-green-600"
                          dangerouslySetInnerHTML={{ __html: result.correctAnswer }}
                        />
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-6 text-center">
        <button
          onClick={onRestart}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold"
        >
          Take Another Quiz
        </button>
      </div>
    </div>
  );
};

export default ScoreSummary;
