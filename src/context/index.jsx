import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [id, setID] = useState("");

  return (
    <UserContext.Provider value={{ id, setID, username, setUsername, password, setPassword, email, setEmail }}>
      {children}
    </UserContext.Provider>
  )
}

export const user = () => useContext(UserContext)
