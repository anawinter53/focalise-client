import React, { useEffect } from "react";
import "./login.css";

import { user } from "../../context/index";

export default function Login() {
  const { id, setID, password, setPassword, username, setUsername, token, setToken } =
    user();

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    const loginUser = async () => {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password }),
      };
      const res = await fetch("http://127.0.0.1:4000/login", options);
      const data = await res.json();
      setToken(data.token);
      setID(data.id)
      console.log(token);
    };

    loginUser();
  }
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", `${token}`);
      localStorage.setItem("username", `${username}`);
      localStorage.setItem("id", `${id}`);
      window.location.assign("/");
    }
  }, [token]);

  return (
    <div id="login-page">
      <h2>Login</h2>
      <form>
        <input onChange={usernameHandler} type="username" placeholder="Username"></input>
        <input
          onChange={passwordHandler}
          type="password"
          placeholder="Password"
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <p>
        No account? <a href="/register">Register Here</a>
      </p>
    </div>
  );
}
