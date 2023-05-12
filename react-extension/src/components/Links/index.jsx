import "./Links.css"

export default function Links() {
  const openSensory = () => {
    window.open("http://127.0.0.1:4000/sensory")
  };

  const openTasks = () => {
    window.open('http://127.0.0.1:4000/tasks')
  }

  const openWorkspace = () => {
    window.open('http://127.0.0.1:4000/workspace')
  }

  const openSecret = () => {
    window.open('http://127.0.0.1:4000/secret.png')
  }

    return (
      <>
        <h2 className="title-heading">Your favourite Focalise pages:</h2>
        <div className="button-container">
          <button onClick={openTasks} className="link-button">Tasks</button>
          <button onClick={openWorkspace} className="link-button">Workspace</button>
          <button onClick={openSensory} className="link-button">Sensory</button>
          <button onClick={openSecret} className="link-button">Secret</button>
        </div>
      </>
    );
  }
