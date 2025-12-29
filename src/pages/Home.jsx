import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import QuizStart from "../components/QuizStart";
import { fetchCategories } from "../services/triviaApi";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  const startQuiz = () => {
    if (!category) {
      alert("Please select a category");
      return;
    }

    navigate(`/quiz?amount=5&category=${category}&difficulty=${difficulty}`);
  };

  return (
    <Layout>
      <QuizStart
        categories={categories}
        category={category}
        setCategory={setCategory}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        onStart={startQuiz}
      />
    </Layout>
  );
};

export default Home;
