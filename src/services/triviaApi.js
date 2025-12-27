export const fetchCategories = async () => {
  const res = await fetch("https://opentdb.com/api_category.php");
  const data = await res.json();
  return data.trivia_categories;
};

export const fetchQuestions = async (amount, category, difficulty) => {
  try {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    );

    const data = await res.json();

    if (data.response_code !== 0) {
      console.error("API Error:", data.response_code);
      let errorMessage = "Unknown error";
      if (data.response_code === 1) errorMessage = "No questions available for this category.";
      else if (data.response_code === 2) errorMessage = "Invalid parameters.";
      else if (data.response_code === 5) errorMessage = "Rate limit exceeded. Please wait a moment and try again.";
      return { questions: [], error: errorMessage };
    }

    return { questions: data.results, error: null };
  } catch (error) {
    console.error("Fetch failed:", error);
    return { questions: [], error: "Network error. Please check your connection." };
  }
};
