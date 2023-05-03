import React, { useEffect } from 'react'

export default function LogoutPage() {
    useEffect(() => {
      async function logout() {
        await fetch("http://localhost:4000/users/logout", {credentials: "include"})
        localStorage.clear();
        window.location.assign("/")
      }
      logout()
    },[])

  return (
    <></>
  )
}
