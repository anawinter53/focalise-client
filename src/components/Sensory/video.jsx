import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../contexts'
import { renderMatches } from 'react-router-dom';
// import { useCountdown } from '../../hooks/useCountdown';


export default function Video({ time, type }) {
    const { theme } = useTheme()
    const [timer, setTimer] = useState(0);
    const [runTimer, setRunTimer] = useState(false);
    var showHideClassName = "modal display-none";


    function fetchVideoLink() {
        const link = "https://www.youtube.com/embed/jI9tSvkuVQQ"
        return link
    }
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
            showHideClassName = "modal display-block"

        }
    }, [timer, runTimer]);

    const togglerTimer = () => setRunTimer((t) => !t);

    const seconds = String(timer % 60).padStart(2, 0);
    const minutes = String(Math.floor(timer / 60)).padStart(2, 0);

    useEffect(() => {
        togglerTimer()
    }, [])
    useEffect(() => { document.body.style.backgroundColor = `${theme.primColor}` },)

    return (

        <section id="video-frame">
            <div className="container">
                <div className="row shadow rounded m-5" style={{ backgroundColor: `${theme.primBG}` }}>
                    <p className='fs-5 text-center mt-3' style={{ color: `${theme.primText}` }}>{`${minutes}:${seconds}`}</p>
                    <iframe className='px-5 pb-5' style={{ aspectRatio: 3 / 1.3 }}
                        width="853"
                        src={fetchVideoLink()}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
            </div>
        </section>
    )
}
