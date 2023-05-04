import React from "react";
import "./register.css";
import { useState } from "react";
import { user } from "../../context/index";
import { useTheme } from "../../contexts";

export default function Register() {
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const { username, setUsername, password, setPassword, email, setEmail } =
    user();
  const {theme} = useTheme()
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
    // <div id="register-page">
    //   <h2>Register</h2>
    //   <form>
    //     <input
    //       onChange={usernameHandler}
    //       type="text"
    //       placeholder="Username"
    //     ></input>
    //     <input
    //       onChange={passwordHandler}
    //       type="password"
    //       placeholder="Password"
    //     ></input>
    //     <input
    //       onChange={confirmPasswordHandler}
    //       type="password"
    //       placeholder="Confirm Password"
    //     ></input>
    //     <input onChange={emailHandler} type="email" placeholder="Email"></input>
    //     <button type="submit" onClick={handleSubmit}>
    //       Submit
    //     </button>
    //   </form>
    //   <p>
    //     Already registered? <a href="/login">Login Here</a>
    //   </p>
    // </div>

    <section>
        <div id="login-page" className="d-flex justify-content-center align-items-center">
          <div className="p-5 m-5 shadow rounded" style={{backgroundColor:`${theme.primBG}`}}>
              <form>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input onChange={usernameHandler} type="text" className="form-control" id="Username"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Email1" className="form-label">Email address</label>
                    <input onChange={emailHandler} type="email" className="form-control" id="Email1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Password1" className="form-label">Password</label>
                    <input  onChange={passwordHandler} type="password" className="form-control" id="Password1"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Password2" className="form-label">Password</label>
                    <input  onChange={confirmPasswordHandler} type="password" className="form-control" id="Password2"/>
                  </div>
                  <button onClick={handleSubmit} type="submit" className="btn border" style={{backgroundColor: `${theme.accentColor}`, color:`${theme.primText}`}}>Submit</button>
                </form>
                <div className='mt-3'><a  href="/login">Have an account?</a></div>
          </div>
        </div>
    </section>

  );
}
