import { useTheme } from '../../contexts/themes'
import '../SensoryPage/index.css'
import 'animate.css';


export default function SensoryPage() {
    const { theme } = useTheme();
    function scrollToTime(){
        window.scrollTo(0, 0)
    }
    function scrollToType(){
    document.getElementById('select-type').scrollIntoView()
    }
    function scrollToVideoFrame() {
        document.getElementById('video-frame').scrollIntoView()
    }
    
    
  return (
        <div style={{backgroundColor: `${theme.primColor}`}}>
            <section id="select-time" style={{height: '100vh'}}>
            <div className="d-flex aligns-items-center justify-content-center p-5">
                <div className="container text-center m-5 py-5 shadow rounded" style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`}}>
                    <h1>Welcome to the sensory room!</h1><br/><h2>How long do you want to be here?</h2>
                    <div className="row justify-content-center p-5" style={{}}> 
                        <div className="col-3 m-1" >
                            <button onClick={scrollToType} className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>5 Minutes</button>
                        </div>
                        <div className="col-3 m-1">
                            <button onClick={scrollToType} className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>10 Minutes</button>
                        </div>
                        <div className="col-3 m-1">
                            <button onClick={scrollToType} className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>15 Minutes</button>
                        </div>
                    </div>
                </div>            
            </div>
            </section>
            <section id="select-type" style={{height: '100vh'}} className='mt-5 '>
                <br/><br/><br/><br/>
                <div className='container py-3'>
                    <button onClick={scrollToTime} className='btn border mt-5' style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`}}>Back</button>  
                </div>
                <div className="d-flex aligns-items-center text-center justify-content-center">
                    <div className="container text-center shadow p-3 rounded" style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`}}>
                        <h2>What would you like to do?</h2>
                        <div className="row p-5 justify-content-center" style={{}}> 
                            <div className="col-3 m-1" >
                                <button onClick={scrollToVideoFrame} className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>Music</button>
                            </div>
                            <div className="col-3 m-1">
                                <button onClick={scrollToVideoFrame} className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>Live Animal</button>
                            </div>
                            <div className="col-3 m-1">
                                <button onClick={scrollToVideoFrame} className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>Meditation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="video-frame" style={{height: '100vh'}}>
                <div className='container py-3'>
                    <button onClick={scrollToType} className='btn border mt-5' style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`}}>Back</button>  
                </div>                
                <div className="container text-center mb-5" >
                    <div className="row justify-content-center shadow rounded" style={{backgroundColor: `${theme.primBG}`}}>
                        <div className="col p-5">
                        <iframe style={{height: '50vh'}}
                            width="853"
                            src={`https://www.youtube.com/embed/jI9tSvkuVQQ`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                            />
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
  )
}
