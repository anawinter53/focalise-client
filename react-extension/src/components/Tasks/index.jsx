import { useEffect } from "react";
import { User } from "../../contexts/user";
import "./tasks.css";

export default function Tasks() {
  const { id } = User();
  // const id = localStorage.id

 useEffect(() => {
   const getTasks = async () => {
     const res = await fetch(`http://localhost:4000/tasks/user/${id}`);
     const data = await res.json();
     console.log(data)
   };
 getTasks() 
 }, [])
  
  return (
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  )
}
