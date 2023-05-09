import { Howl } from 'howler';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import rainforest from './Rainforest-sounds.mp3';
import morning from './Morning-sounds.mp3';
import rainfall from './Rainfall.mp3'

export const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPaused, setIsPaused] = useState(false); // new state variable

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
    <div>
      <Select
        options={tracks.map((track) => ({
          value: track.id,
          label: track.name
        }))}
        onChange={playTrack}
      />
      <button onClick={pauseTrack}>Pause</button>
    </div>
  );
};
