import { useState, useEffect } from "react";
import { user } from "../../contexts/user";
import { useTheme } from "../../contexts";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const registerUser = async () => {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      };

      const res = await fetch("http://127.0.0.1:4000/users/register/", options);

      if (res.ok) {
        console.log(`You have successfully signed up ${username}`);
        window.location.assign("/login");
      } else {
        console.log("error in signup");
      }
    };

    if (password !== confirmPassword) {
      toast.error("Your passwords did't match")
      //alert("Your passwords do not match");
    } else {
      registerUser();
    }
  }

  return ( 
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
        <ToastContainer />

    </section>
  );
}
