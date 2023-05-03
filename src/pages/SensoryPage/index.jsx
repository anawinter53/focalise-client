import { useTheme } from '../../contexts/themes'
import '../SensoryPage/index.css'

export default function SensoryPage() {
    const { theme } = useTheme();
    function scrollToTime(){
        document.getElementById('select-time').scrollIntoView()
        }
    function scrollToType(){
    document.getElementById('select-type').scrollIntoView()
    }
    function scrollToVideoFrame() {
        document.getElementById('video-frame').scrollIntoView()
    }
    
    
  return (
        <>
        <section id="select-time" style={{backgroundColor: `${theme.primColor}`}} >
        <div style={{backgroundColor: `${theme.primColor}`}} className="d-flex aligns-items-center justify-content-center">
            <div className="container text-center m-5 p-5" style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`}}>
                <h1>Welcome to the sensory room!<br/>How long do you want to be here?</h1>
                <div className="row m-5 justify-content-center" style={{}}> 
                    <div className="col-3 p-5 m-1" >
                        <button onClick={scrollToType} className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>5 Minutes</button>
                    </div>
                    <div className="col-3 p-5 m-1">
                        <button onClick={scrollToType} className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>10 Minutes</button>
                    </div>
                    <div className="col-3 p-5 m-1">
                        <button onClick={scrollToType} className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>15 Minutes</button>
                    </div>
                </div>
            </div>            
        </div>
        </section>
        <section id="select-type" style={{backgroundColor: `${theme.primColor}`}}>
            <div className="container text-center justify-content-center">
            <button onClick={scrollToTime} className='btn border'>Back</button>  
                <div className="text-center m-5 p-5" style={{backgroundColor: `${theme.primBG}`,  color: `${theme.primText}`}}>
                    <h1>What would you like to do?</h1>
                    <div className="row m-5 justify-content-center" style={{}}> 
                        <div className="col-3 p-5 m-1" >
                            <button onClick={scrollToVideoFrame} className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>Music</button>
                        </div>
                        <div className="col-3 p-5 m-1">
                            <button onClick={scrollToVideoFrame} className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>Live Animal</button>
                        </div>
                        <div className="col-3 p-5 m-1">
                            <button onClick={scrollToVideoFrame} className='btn' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>Meditation</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="video-frame" style={{backgroundColor: `${theme.primColor}`}}>
            <div className="container text-center p-5" style={{backgroundColor: `${theme.primColor}`}}>
                <button onClick={scrollToType} className='btn border mt-5'>Back</button>
                <div className="row m-5 justify-content-center" style={{}}>
                    <div className="col p-5 m-1">
                    <iframe
                        width="853"
                        height="480"
                        src={`https://www.youtube.com/embed/jI9tSvkuVQQ`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        />
                    </div>
                </div>
            </div>
        </section>
            
        </>
  )
}
