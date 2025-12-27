import { useLocation, useNavigate } from "react-router-dom";
import ScoreSummary from "../components/ScoreSummary";

const Results = () => {
  const query = new URLSearchParams(useLocation().search);
  const score = query.get("score");
  const total = query.get("total");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <ScoreSummary
        score={score}
        total={total}
        onRestart={() => navigate("/")}
      />
    </div>
  );
};

export default Results;
