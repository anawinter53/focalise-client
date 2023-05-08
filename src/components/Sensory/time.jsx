import { useEffect } from 'react'
import { useTheme } from '../../contexts'

export default function Time({handleTime}) {
    const { theme } = useTheme()
    function timeHandler(e){
        e.preventDefault()
        handleTime(e.target.name)
    }
    useEffect(() => { document.body.style.backgroundColor = `${theme.primColor}` }, )

  return (
    <div>
      <section id="select-time" style={{height: '100vh'}}>
            <div className="d-flex aligns-items-center justify-content-center position-relative">
                <div className="container text-center pt-3 shadow rounded position-absolute" style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`,  top: '50%', left: '50%', transform: `translate(-50%,50%)`}}>
                    <h1>Welcome to the sensory room!</h1><br/><h2>How long do you want to be here?</h2>
                    <div className="row justify-content-center p-5" style={{}}> 
                        <div className="col-3 m-1" >
                            <button onClick={timeHandler} name='1' className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>5 Minutes</button>
                        </div>
                        <div className="col-3 m-1">
                            <button onClick={timeHandler} name='10' className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>10 Minutes</button>
                        </div>
                        <div className="col-3 m-1">
                            <button onClick={timeHandler} name='15' className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>15 Minutes</button>
                        </div>
                    </div>
                </div>            
            </div>
            </section>
    </div>
  )
}
