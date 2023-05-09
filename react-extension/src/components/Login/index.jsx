import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts";
import { User } from "../../contexts/user";
import "./login.css";

export default function Login() {
  const { id, setID, password, setPassword, username, setUsername, token, setToken } =
  User();
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
    <section>
    <div id="login-page" className="d-flex justify-content-center align-items-center">
      <div className="p-5 m-5 shadow rounded" style={{backgroundColor:`${theme.primBG}`}}>
          <form>
              <div className="mb-3">
                <label htmlFor="Email1" className="form-label">Username</label>
                <input onChange={usernameHandler} type="text" placeholder="username" className="form-control" id="Email1" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3">
                <label htmlFor="Password1" className="form-label">Password</label>
                <input  onChange={passwordHandler} placeholder="password" type="password" className="form-control" id="Password1"/>
              </div>
              <button onClick={handleSubmit} type="submit" className="btn border" style={{backgroundColor: `${theme.accentColor}`, color:`${theme.primText}`}}>Submit</button>
            </form>
            <div className='mt-3'><a  href="/register">Create Account</a></div>
      </div>
    </div>
</section>
    
  );
}
