import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import "./styleData.css";

const DataList = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({});

  const fetchData = () => {
    const dataFromBackend = [
      { user: "maral", score: 1 },
      { user: "maral", score: 15 },
      { user: "ata", score: 3 },
      // { user: "ata", score: 7 },
      { user: "ata", score: 8 },
      { user: "maral", score: 1 },
    ];

    const scores = {};

    dataFromBackend.forEach((i) => {
      if (scores[i.user]) {
        scores[i.user] = [...scores[i.user], i.score];
      } else {
        scores[i.user] = [i.score];
      }
    });

    /**
     scores = {
      maral: [1, 15, 1],
      ata: [3,7,8],
      omid: [5,10,4]
     }
     */

    setData(scores);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <div>
        <table>
          <tr>
            <td>User</td>
            {(Object.values(data)[0] || []).map((_, index) => {
              console.log("index", index);
              console.log("data", data);
              return <td>{`Game ${index + 1}`}</td>;
            })}
          </tr>
          {Object.values(data) // Object.values(data) -> [[1, 15, 1],[3,7,8],[5,10,4]]
            .map((itm, indx) => {
              return (
                <tr>
                  <td>{Object.keys(data)[indx]}</td>
                  {itm.map((x) => (
                    <td>{x}</td>
                  ))}
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default DataList;
