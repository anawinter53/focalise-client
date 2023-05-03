import React, { useEffect } from "react";
import "./login.css";

import { page, user } from "../../context/index";

export default function Login() {
  const { user_id, setUser_id, email, setEmail, password, setPassword, username, setUsername } =
    user();

  const emailHandler = (e) => {
    setEmail(e.target.value);
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
        credentials: "include",
        body: JSON.stringify({ email: email, password: password }),
      };

      const res = await fetch("http://localhost:4000/users/login", options);
      const data = await res.json();
      setUser_id(data.userid);
      setUsername(data.username);
    };

    loginUser();
  }
  useEffect(() => {
    if (user_id) {
      localStorage.setItem("userid", `${user_id}`);
      localStorage.setItem("username", `${username}`);
      window.location.assign("/extension");
    }
  }, [user_id]);

  return (
    <div id="login-page">
      <h2>Login</h2>
      <form>
        <input onChange={emailHandler} type="email" placeholder="Email"></input>
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
        Don't have an account? <a href="/register">Register Here</a>
      </p>
    </div>
  );
}
