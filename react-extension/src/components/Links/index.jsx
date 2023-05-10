import "./Links.css"

export default function Links() {
  const openSensory = () => {
    window.open("http://localhost:5173/sensory")
  };

  const openTasks = () => {
    window.open('http://localhost:5173/tasks')
  }

  const openWorkspace = () => {
    window.open('http://localhost:5173/workspace')
  }

  const openChat = () => {
    window.open('http://localhost:5173/chat')
  }
    return (
      <>
        <h2 className="title-heading">Some shortcuts to your favourite Focalise pages:</h2>
        <div className="button-container">
            <button onClick={openSensory} className="link-button">Sensory</button>
          <button onClick={openTasks} className="link-button">Tasks</button>
          <button onClick={openWorkspace} className="link-button">Workspace</button>
          <button onClick={openChat} className="link-button">Chat</button>
        </div>
      </>
    );
  }
