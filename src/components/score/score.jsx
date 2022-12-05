import { useNavigate } from "react-router-dom";

const Score = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Score page</h1>
      <div className="container-btn">
        <button
          className="btn"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate("/score");
          }}
        >
          Score
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate("/user");
          }}
        >
          User
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate("/dataList");
          }}
        >
          Data List
        </button>
      </div>
    </>
  );
};

export default Score;
