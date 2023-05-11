import 'animate.css';
import { Time, Type, Video } from '../../components';
import { useState } from 'react';
import * as Constant from '../../constants'

export default function SensoryPage() {
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
          const res = await fetch( Constant.MAIN_URl + "sensory/" + type);
          const data = await res.json();
          //random
          const rand = Math.floor(Math.random() * data.length)
          const rand_data = data[rand]
          setVideoLink(rand_data.video_url);
          console.log(videoLink, data)
    }
    function RenderView() {

        if (render === 'video') {
            return <Video time={sensoryTime} videoLink={videoLink} setRender={setRender}/>
        }
        else if (render === 'type') {
            return <Type handleType={handleType}/>
        }
        else {
            return <Time handleTime={handleTime} />
        }
    }

    return (
        <div>
            <RenderView/>
        </div>
    )
}
