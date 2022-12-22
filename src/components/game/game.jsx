import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Game = () => {
  const [userId, setUserId] = useState("");
  const [players, setPlayers] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => {
    if (e.target.name === "userId") {
      setUserId(e.target.value);
    } else if (e.target.name === "players") {
      setPlayers(e.target.value);
    }
  };

  const createGame = async () => {
    const request = await fetch("http://127.0.0.1:4000/games", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        user_id: userId,
        players: players.replace(/ /g, "").split(","),
      }),
    });
    const result = await request.json();
    console.log(result);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createGame();
  };

  return (
    <>
      <h1>Create Game</h1>
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
      <main>
        <form onSubmit={onSubmit}>
          <label htmlFor="userId">User ID</label>
          <input
            type="text"
            name="userId"
            id="userId"
            value={userId}
            onChange={onChange}
          />
          <label htmlFor="players">Players</label>
          <input
            type="text"
            name="players"
            id="players"
            value={players}
            onChange={onChange}
          />
          <input type="submit" value="Create Game" />
        </form>
      </main>
    </>
  );
};

export default Game;
