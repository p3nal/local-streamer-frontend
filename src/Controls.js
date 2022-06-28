function Controls({ nowPlayingSong, getPrev, getNext, togglePlayback, playbackState }) {


  return (
    <div>

      <div>Now Playing: {nowPlayingSong.name}</div>

      <button onClick={getPrev}>
        previous
      </button>

      <button onClick={togglePlayback}>
        {playbackState}
      </button>

      <button onClick={getNext}>
        next
      </button>

    </div>
  );
}

export default Controls;
