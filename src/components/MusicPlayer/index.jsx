import { Howl } from 'howler';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import rainforest from './Rainforest-sounds.mp3';
import morning from './Morning-sounds.mp3';
import rainfall from './Rainfall.mp3'
import { useTheme } from '../../contexts';
export const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPaused, setIsPaused] = useState(false); // new state variable
  const { theme } = useTheme()
  const tracks = [
    {
      id: 'rainforest',
      name: 'Rainforest',
      src: rainforest,
      html5: true,
      preload: true,
      loop: true
    },
    {
      id: 'Morning',
      name: 'Morning',
      src: morning,
      html5: true,
      preload: true,
      loop: true
    },
    {
      id: 'Rainfall',
      name: 'Rainfall',
      src: rainfall,
      html5: true,
      preload: true,
      loop: true
    }
  ];

  const playTrack = (selectedTrack) => {
    if (currentTrack) {
      currentTrack.pause();
      currentTrack.unload();
    }

    const track = tracks.find((t) => t.id === selectedTrack.value);
    const sound = new Howl({
      src: track.src,
      html5: true,
      preload: true,
      loop: true
    });
    sound.play();
    setCurrentTrack(sound);
    setIsPaused(false);
    localStorage.setItem('currentTrack', JSON.stringify(track));
    localStorage.setItem('isPaused', JSON.stringify(false));
  };

  const pauseTrack = () => {
    if (currentTrack) {
      currentTrack.pause();
      setIsPaused(true);
      localStorage.setItem('isPaused', JSON.stringify(true));
    }
  };

  useEffect(() => {
    const storedTrack = localStorage.getItem('currentTrack');
    const storedIsPaused = localStorage.getItem('isPaused') === 'true';
    if (storedTrack) {
      const track = JSON.parse(storedTrack);
      if (track && track.src) {
        const sound = new Howl({
          src: track.src,
          html5: true,
          preload: true,
          loop: true
        });
        setCurrentTrack(sound);
        setIsPaused(storedIsPaused);
        if (!storedIsPaused) {
          sound.play();
        }
      }
    }

    return () => {
      if (currentTrack) {
        currentTrack.pause();
        currentTrack.unload();
        localStorage.setItem('currentTrack', JSON.stringify(null));
      }
    };
  }, []);

  return (
    <div className='d-flex rounded border me-2 align-middle' style={{ backgroundColor: theme.primColor }}>
      <button className='btn border-0 disabled' style={{ color: theme.primText }}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 32 32" fill={{color: theme.primText}}>
        <path d="M 27 3.78125 L 25.8125 4.03125 L 9.8125 7.03125 L 9 7.15625 L 9 20.5625 C 8.40625 20.214844 7.734375 20 7 20 C 4.800781 20 3 21.800781 3 24 C 3 26.199219 4.800781 28 7 28 C 9.199219 28 11 26.199219 11 24 L 11 12.8125 L 25 10.1875 L 25 17.5625 C 24.40625 17.214844 23.734375 17 23 17 C 20.800781 17 19 18.800781 19 21 C 19 23.199219 20.800781 25 23 25 C 25.199219 25 27 23.199219 27 21 Z M 25 6.1875 L 25 8.1875 L 11 10.8125 L 11 8.8125 Z M 23 19 C 24.117188 19 25 19.882813 25 21 C 25 22.117188 24.117188 23 23 23 C 21.882813 23 21 22.117188 21 21 C 21 19.882813 21.882813 19 23 19 Z M 7 22 C 8.117188 22 9 22.882813 9 24 C 9 25.117188 8.117188 26 7 26 C 5.882813 26 5 25.117188 5 24 C 5 22.882813 5.882813 22 7 22 Z"></path>
      </svg></button>
      <Select
        options={tracks.map((track) => ({
          value: track.id,
          label: track.name,
        }))}
        onChange={playTrack}
      />
      <button className='btn border-0' onClick={pauseTrack} disabled={isPaused ? true : false} style={{ color: theme.primText }}>Stop</button>
    </div>
  );
};
