const ScoreSummary = ({ score, total, results, onRestart }) => {
  const percentage = Math.round((score / total) * 100);

  const shareScore = async () => {
    const shareData = {
      title: 'Quiz Challenge!',
      text: `I scored ${score}/${total} (${percentage}%) on this quiz! Can you beat my score?`,
      url: window.location.origin
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      const shareText = `${shareData.text} ${shareData.url}`;
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Share link copied to clipboard!');
      });
    }
  };

  const shareOnTwitter = () => {
    const text = `I scored ${score}/${total} (${percentage}%) on this quiz! Can you beat my score?`;
    const url = encodeURIComponent(window.location.origin);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`;
    window.open(twitterUrl, '_blank');
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.origin);
    const text = encodeURIComponent(`I scored ${score}/${total} (${percentage}%) on this quiz! Can you beat my score?`);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
    window.open(facebookUrl, '_blank');
  };

  const shareOnWhatsApp = () => {
    const text = `I scored ${score}/${total} (${percentage}%) on this quiz! Can you beat my score? ${window.location.origin}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

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

      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Share Your Score! 🏆</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={shareScore}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold flex items-center gap-2"
          >
            📤 Share
          </button>
          <button
            onClick={shareOnTwitter}
            className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 font-semibold flex items-center gap-2"
          >
            🐦 Twitter
          </button>
          <button
            onClick={shareOnFacebook}
            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 font-semibold flex items-center gap-2"
          >
            📘 Facebook
          </button>
          <button
            onClick={shareOnWhatsApp}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-semibold flex items-center gap-2"
          >
            💬 WhatsApp
          </button>
        </div>
        <p className="text-sm text-gray-500 text-center mt-3">
          Challenge your friends to beat your score!
        </p>
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
