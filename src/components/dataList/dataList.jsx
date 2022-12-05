import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styleData.css";

const DataList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchData = () => {
    const dataFromBackend = [
      { user: "maral", score: 1 },
      { user: "maral", score: 15 },
      { user: "ata", score: 3 },
      { user: "ata", score: 7 },
      { user: "omid", score: 5 },
      { user: "omid", score: 105 },
      { user: "maral", score: 1 },
    ];
    setData(dataFromBackend);
  };

  fetchData();

  return (
    <div className="container">
      <header className="header">
        <nav>
          <h1 className="title">DataList page</h1>
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
        </nav>
      </header>

      <br />
      <table>
        <tr>
          {Object.keys(data[0]).map((key) => {
            return <tr>{key}</tr>;
          })}
        </tr>
        {data.map((item) => {
          return (
            <tr>
              {Object.values(item).map((val) => {
                return <td>{val}</td>;
              })}
            </tr>
          );
        })}
      </table>

      <Outlet />
      <div></div>
    </div>
  );
};

export default DataList;
