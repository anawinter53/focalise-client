import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [id, setID] = useState("");
  const [token, setToken] = useState('');

  return (
    <UserContext.Provider value={{ id, setID, username, setUsername, password, setPassword, email, setEmail, token, setToken }}>
      {children}
    </UserContext.Provider>
  )
}

export const user = () => useContext(UserContext)
