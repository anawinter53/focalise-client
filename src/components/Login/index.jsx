import { useEffect } from "react";
import "./login.css";

import { user } from "../../context/index";

export default function Login() {
  const { id, setID, email, setEmail, password, setPassword, username, setUsername } =
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
      setID(data.userid);
      setUsername(data.username);
    };

    loginUser();
  }
  
  useEffect(() => {
    if (id) {
      localStorage.setItem("userid", `${id}`);
      localStorage.setItem("username", `${username}`);
      window.location.assign("/");
    }
  }, [id]);

  return (
    <div className="login-page">
      <h2 className="login-title">Login</h2>
      <div className="form-container">
        <label htmlFor="email-input">Enter your email</label>
        <input className="email-input" onChange={emailHandler} type="email" placeholder="Email" />
        <label htmlFor="password-input">Enter your password</label>
        <input className="password-input" onChange={passwordHandler} type="password" placeholder="Password" />
        <button className="submit-button" type="submit" onClick={handleSubmit}>Submit</button>
      </div>
      <p>No account? <a href="/register">Register Here</a></p>
    </div>
  );
}
