import { useState, useEffect } from 'react'
import { useTheme } from '../../contexts'
import TimeUpModal from '../TimeUpModal'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
export default function Video({ time, videoLink, setRender}) {
    const { theme } = useTheme()
    const [timer, setTimer] = useState(0);
    const [runTimer, setRunTimer] = useState(false);
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        let timerId;
        if (runTimer) {
            setTimer(time * 60);
            timerId = setInterval(() => {
                setTimer((countDown) => countDown - 1);
            }, 1000);
        } else {
            clearInterval(timerId);
        }

        return () => clearInterval(timerId);
    }, [runTimer]);

    useEffect(() => {
        if (timer < 0 && runTimer) {
            setRunTimer(false);
            setTimer(0)
            setShowModal(true)
            console.log('finished')
        }
    }, [timer, runTimer]);

    const togglerTimer = () => setRunTimer((t) => !t);

    const seconds = String(timer % 60).padStart(2, 0);
    const minutes = String(Math.floor(timer / 60)).padStart(2, 0);

    useEffect(() => {
        togglerTimer()
    }, [])

    return (
        <section id="video-frame">
            <div className="container">
                <div className="row shadow rounded m-5 position-relative" style={{ backgroundColor: theme.secColor }}>
                    <div className='d-flex justify-content-between'>
                        <button className="btn fs-1" style={{ color: theme.secText}} onClick={() => setRender('type')}><BsFillArrowLeftSquareFill/></button>
                        <p className='mt-3 p-2' style={{ backgroundColor: theme.primColor, color: theme.primText }}>{`${minutes}:${seconds}`}</p>
                    </div>
        
                    <iframe className='px-5 pb-5' style={{ aspectRatio: 3 / 1.3 }}
                        width="853"
                        src={videoLink}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="type"
                    />
                </div>
                <TimeUpModal open={showModal}>
                    <p>Time to get back to work!<br/>Go back to your workspace?</p>
                    <a className='btn' style={{backgroundColor:`${theme.accentColor}`}} href="/">Go there now</a>
                </TimeUpModal>
            </div>
        </section>
    )
}
