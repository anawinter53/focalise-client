import { useTheme } from "../../contexts";

export default function Links() {
  const  { theme } = useTheme();

  return (
    <>
      <h2>Some shortcuts to your favourite Focalise pages:</h2>
        <div className="row justify-content-center p-5"> 
          <form action="http://localhost:4000/sensory" target="_blank" className="col-3 m-1" >
              <button value="submit" className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>Sensory</button>
          </form>
          <div className="col-3 m-1">
              <button className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>Tasks</button>
          </div>
          <div className="col-3 m-1">
            <button className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>Workspace</button>
          </div>
          <div className="col-3 m-1">
            <button className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>Chat</button>
          </div>
        </div>
    </>
  )
}
