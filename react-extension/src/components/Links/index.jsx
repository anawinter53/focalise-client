import "./Links.css"

export default function Links() {
  const openSensory = () => {
    window.open("https://focalise.onrender.com/sensory")
  };

  const openTasks = () => {
    window.open('https://focalise.onrender.com/tasks')
  }

  const openWorkspace = () => {
    window.open('https://focalise.onrender.com/workspace')
  }

    return (
      <>
        <h2 className="title-heading">Some shortcuts to your favourite Focalise pages:</h2>
        <div className="button-container">
            <button onClick={openSensory} className="link-button">Sensory</button>
          <button onClick={openTasks} className="link-button">Tasks</button>
          <button onClick={openWorkspace} className="link-button">Workspace</button>
        </div>
      </>
    );
  }
