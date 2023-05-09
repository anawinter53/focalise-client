import { User } from "../../contexts/user";
import "./tasks.css";

export default function Tasks() {
  const { id } = User();
  // const id = localStorage.id

  const getTasks = async () => {
    const res = await fetch(`http://localhost:4000/tasks/user/${id}`);
    const data = await res.json();
    console.log(data);
  };
  
  return (
    <div>HELLO - Nothing to see here</div>
  )
}
