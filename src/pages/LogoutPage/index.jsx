import React, { useEffect } from 'react'
import * as Constant from '../../constants'

export default function LogoutPage() {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: localStorage.token }),
  };
  
  useEffect(() => {
      async function logout() {
        await fetch(Constant.MAIN_URl + "users/logout", options)
        localStorage.clear();
        window.location.assign("/")
      }
      logout()
    },[])

  return (
    <></>
  )
}
