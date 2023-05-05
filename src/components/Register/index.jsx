import { useState, useEffect } from "react";
import { user } from "../../context/index";
import { useTheme } from "../../contexts";

export default function Register() {
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const { username, setUsername, password, setPassword, email, setEmail } =
    user();
  const {theme} = useTheme()
  useEffect(() => { document.body.style.backgroundColor = `${theme.primColor}` }, )

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
      <h2>Register</h2>
      <form>
        <input
          onChange={usernameHandler}
          type="text"
          placeholder="Username"
        ></input>
        <input
          onChange={passwordHandler}
          type="password"
          placeholder="Password"
        ></input>
        <input
          onChange={confirmPasswordHandler}
          type="password"
          placeholder="Confirm Password"
        ></input>
        <input onChange={emailHandler} type="email" placeholder="Email"></input>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <p>
        Already registered? <a href="/login">Login Here</a>
      </p>
    </div>
  );
}
