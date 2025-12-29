const BASE_URL = "https://opentdb.com";

/**
 * Fetch available quiz categories
 */
const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}/api_category.php`);
  const data = await response.json();
  return data.trivia_categories;
};

/**
 * Fetch quiz questions
 */
const fetchQuestions = async ({ amount, category, difficulty }) => {
  const response = await fetch(
    `${BASE_URL}/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  );
  const data = await response.json();
  return data.results;
};

export { fetchCategories, fetchQuestions };
