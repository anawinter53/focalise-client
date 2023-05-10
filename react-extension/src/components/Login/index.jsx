import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme, useUser } from "../../contexts";
import './login.css'

export default function Login() {
  const { id, setID, password, setPassword, username, setUsername, token, setToken } =
  useUser();
  const navigate = useNavigate();
  const  { theme } = useTheme();

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
      const res = await fetch("http://localhost:4000/users/login", options);
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
      navigate("/loggedin")
    }
  }, [id]);
  useEffect(() => { document.body.style.backgroundColor = `${theme.primColor}` }, )

  return (
  <div id="login-page" className="login-page-body">
    <form className="login-form">
      <input onChange={usernameHandler} type="text" placeholder="username" className="input-box" id="Email1" aria-describedby="emailHelp"/>
      <input  onChange={passwordHandler} placeholder="password" type="password" className="input-box" id="Password1"/>
      <button onClick={handleSubmit} type="submit" className="submit-button">Submit</button>
    </form>
  </div>
  );
}
