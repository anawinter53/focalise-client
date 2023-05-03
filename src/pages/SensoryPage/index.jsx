import { useTheme } from '../../contexts/themes'

export default function SensoryPage() {
    const { theme } = useTheme();

  return (
        <>
        <div style={{backgroundColor: `${theme.primColor}`}} className="d-flex aligns-items-center">
                <div className="container text-center m-5 p-5">
                    <h1>Welcome to the sensory room!<br/>How long do you want to be here?</h1>
                    <div className="row m-5 justify-content-center"> 
                        <div className="col-4 p-5 m-1" style={{backgroundColor: `${theme.primBG}`}}>
                            <button className='btn' style={{backgroundColor: `${theme.accentColor}`}}>5 Minutes</button>
                        </div>
                        <div className="col-3 p-5 m-1" style={{backgroundColor: `${theme.primBG}`}}>
                            <button className='btn' style={{backgroundColor: `${theme.accentColor}`}}>10 Minutes</button>
                        </div>
                        <div className="col-4 p-5 m-1" style={{backgroundColor: `${theme.primBG}`}}>
                            <button className='btn' style={{backgroundColor: `${theme.accentColor}`}}>15 Minutes</button>
                        </div>
                    </div>
                </div>            
        </div>
            
        </>
  )
}
