import React, { useEffect } from 'react'

export default function LogoutPage() {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: localStorage.token }),
  };
  
  useEffect(() => {
      async function logout() {
        await fetch("http://localhost:4000/users/logout", options)
        localStorage.clear();
        window.location.assign("/")
      }
      logout()
    },[])

  return (
    <></>
  )
}
