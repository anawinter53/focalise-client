import { useEffect } from 'react'
import * as Constant from '../../constants'
import { useTheme } from '../../contexts';

export default function LogoutPage() {
  const {setTheme} = useTheme()
  
  useEffect(() => {
      async function logout() {
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: localStorage.token }),
        };
        console.log(options)
        await fetch(Constant.MAIN_URl + "users/logout", options)
        localStorage.clear();
        window.location.assign("/")
        setTheme('Lavender')
      }
      logout()
    },[])

  return (
    <></>
  )
}
