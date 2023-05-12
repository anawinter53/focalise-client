import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const navigate = useNavigate();
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: localStorage.token }),
  };
  
  useEffect(() => {
      async function logout() {
        await fetch("http://127.0.0.1:4000/users/logout", options)
        localStorage.clear();
        navigate("/")
      }
      logout()
    },[])

  return (
    <></>
  )
}
