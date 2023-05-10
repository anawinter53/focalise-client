import { useTheme } from '../../contexts/themes'
import 'animate.css';
import { Time, Type, Video } from '../../components';
import { useState } from 'react';
import * as Constant from '../../constants'

export default function SensoryPage() {
    const { theme } = useTheme();
    const [sensoryTime, setSensoryTime] = useState(0)
    const [videoLink, setVideoLink] = useState('')
    const [render, setRender] = useState()

    // var timerTime = 0
    // function scrollToTime(){
    //     window.scrollTo(0, 0)
    // }
    // function scrollToType(){
    // document.getElementById('select-type').scrollIntoView()
    // }
    // function scrollToVideoFrame() {
    //     document.getElementById('video-frame').scrollIntoView()
    // }
    function handleTime(time) {
        setSensoryTime(time)
        setRender("type")
        RenderView()
    }
    function handleType(type,) {
        getSensoryVideos(type)
        setRender('video')
        RenderView()
    }
    const getSensoryVideos = async (type) => {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "video_category": `${type}` }),
          };
          console.log(options)
          const res = await fetch( Constant.MAIN_URl + "sensory/", options);
          const data = await res.json();
          //random
          const rand = Math.floor(Math.random() * data.length)
          const rand_data = data[rand]
          setVideoLink(rand_data.video_url);
          console.log(videoLink, data)
    }
    function RenderView() {

        if (render === 'video') {
            return <Video time={sensoryTime} videoLink={videoLink} />
        }
        else if (render === 'type') {
            return <Type handleType={handleType}/>
        }
        else {
            return <Time handleTime={handleTime} />
        }
    }

    return (
        <div style={{ backgroundColor: `${theme.primColor}` }}>

            <RenderView/>


            {/* <section id="select-time" style={{height: '100vh'}}>
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
            </section> */}

        </div>
    )
}
