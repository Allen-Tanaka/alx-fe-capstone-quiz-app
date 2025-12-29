import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import QuizStart from "../components/QuizStart";
import { fetchCategories } from "../services/triviaApi";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [amount, setAmount] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  // Filter categories based on search term
  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Clear category selection if it's not in the filtered list
  useEffect(() => {
    if (category && !filteredCategories.find(cat => cat.id.toString() === category)) {
      setCategory("");
    }
  }, [searchTerm, filteredCategories, category]);

  const startQuiz = () => {
    if (!category) {
      alert("Please select a category");
      return;
    }

    navigate(
      `/quiz?amount=${amount}&category=${category}&difficulty=${difficulty}`
    );
  };

  return (
    <Layout>
      <QuizStart
        categories={filteredCategories}
        allCategories={categories}
        category={category}
        setCategory={setCategory}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        amount={amount}
        setAmount={setAmount}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onStart={startQuiz}
      />
    </Layout>
  );
};

export default Home;
