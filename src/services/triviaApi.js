const BASE_URL = "https://opentdb.com";

let sessionToken = null;
let tokenPromise = null;

/**
 * Request a session token to avoid rate limiting
 */
const getSessionToken = async () => {
  if (sessionToken) {
    return sessionToken;
  }
  
  // If we're already requesting a token, wait for it
  if (tokenPromise) {
    return tokenPromise;
  }
  
  tokenPromise = (async () => {
    try {
      const response = await fetch(`${BASE_URL}/api_token.php?command=request`);
      const data = await response.json();
      
      if (data.response_code === 0 && data.token) {
        sessionToken = data.token;
        return sessionToken;
      } else {
        console.error("Failed to get token, response:", data);
      }
    } catch (err) {
      console.error("Failed to get session token:", err);
    }
    
    return null;
  })();
  
  const token = await tokenPromise;
  tokenPromise = null; // Reset promise
  return token;
};

/**
 * Reset the session token
 */
const resetSessionToken = () => {
  if (sessionToken) {
    fetch(`${BASE_URL}/api.php?command=reset&token=${sessionToken}`).catch(
      () => {}
    );
  }
  sessionToken = null;
};

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
  // First try without token to see if that works
  let url = `${BASE_URL}/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  // If we get rate limited, try with token
  if (data.response_code === 5) {
    console.log("Rate limited, trying with session token...");
    const token = await getSessionToken();
    
    if (token) {
      url += `&token=${token}`;
      const response = await fetch(url);
      data = await response.json();
    }
  }
  
  // Check response code from Open Trivia DB
  if (data.response_code !== 0) {
    const errorMessages = {
      1: "No results available for the selected criteria. Try different settings.",
      2: "Invalid parameter provided.",
      3: "Session token not set.",
      4: "Session token has returned all possible questions.",
      5: "Too many requests. Please try again in a moment.",
    };
    throw new Error(
      errorMessages[data.response_code] ||
        `API Error: Response code ${data.response_code}`
    );
  }
  
  return data.results;
};

export { fetchCategories, fetchQuestions, resetSessionToken };
