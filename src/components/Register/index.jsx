import { useState } from "react";
import { user } from "../../context/index";

export default function Register() {
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const { username, setUsername, password, setPassword, email, setEmail } =
    user();

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    const registeruser = async () => {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      };

      const res = await fetch("http://127.0.0.1:4000/users/new", options);

      if (res.ok) {
        console.log(`You have successfully signed up ${username}`);
        window.location.assign("/login");
      } else {
        console.log("error in signup");
      }
    };

    if (password !== confirmPassword) {
      alert("Your passwords do not match");
    } else {
      registeruser();
    }
  }

  return (
    <div id="register-page">
      <h2 className="register-title">Register</h2>
      <div className="form-container">
        <label htmlFor="username-input">Enter your username</label>
        <input
          className="username-input"
          onChange={usernameHandler}
          type="text"
          placeholder="Username"
        ></input>
        <label htmlFor="password-input">Enter your new password</label>
        <input
          className="password-input"
          onChange={passwordHandler}
          type="password"
          placeholder="Password"
        ></input>
        <label htmlFor="repeat-password-input">Repeat your password</label>
        <input
          className="repeat-password-input"
          onChange={confirmPasswordHandler}
          type="password"
          placeholder="Confirm Password"
        ></input>
        <label htmlFor="email-input">Enter your email</label>
        <input className="email-input" onChange={emailHandler} type="email" placeholder="Email"></input>
        <button className="submit-button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      <p>
        Already registered? <a href="/login">Login Here</a>
      </p>
    </div>
      </div>
  );
}
