import { useNavigate } from "react-router-dom";
import { useState } from "react";

const User = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    }
  };

  const registerUser = async () => {
    const request = await fetch("http://127.0.0.1:4000/users", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        name,
        username,
        password,
      }),
    });
    const result = await request.json();
    console.log(result);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  return (
    <>
      <h1>User page</h1>
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
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={onChange}
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={onChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
          />
          <input type="submit" value="Register" />
        </form>
      </main>
    </>
  );
};

export default User;
