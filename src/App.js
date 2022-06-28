import { useEffect, useRef, useState } from 'react';
import SongList from './SongList';
import Controls from './Controls';

function App() {
  const [songList, setSongList] = useState([{ name: 'Loading..' }]);
  const [id, setId] = useState(0);
  const [playbackState, setPlaybackState] = useState('play');
  // hope this helps anyone else https://www.javascripture.com/HTMLAudioElement
  const audioRef = useRef(new Audio());

  useEffect(() => {
    fetch('/list')
      .then(res => res.json())
      .then(data => setSongList(data))
  }, []);

  useEffect(() => {
    audioRef.current.src = `http://localhost:8000/song/${id}`;
    if (playbackState === 'pause') audioRef.current.play();
  }, [id]);


  const togglePlayback = () => {
    setPlaybackState(prev => {
      if (prev === 'play') {
        audioRef.current.play();
        return 'pause';
      }
      else if (prev === 'pause') {
        audioRef.current.pause();
        return 'play';
      }
    });
  }


  const getNext = () => {
    setId(prev => (prev < songList.length - 1) ? prev + 1 : 0)
  }

  const getPrev = () => {
    setId(prev => (prev > 0) ? prev - 1 : songList.length - 1)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h2><strong>Welcome back!</strong></h2>
      </header>
      <SongList songs={songList} />
      <Controls
        nowPlayingSong={songList[id]}
        getNext={getNext}
        getPrev={getPrev}
        togglePlayback={togglePlayback}
        playbackState={playbackState}
      />
    </div>
  );
}

export default App;
