function SongList({songs}) {
  return (
    <div>
      <ul>
        {songs.map((song, key) => <li key={key}>{song.name}</li>)}
      </ul>
    </div>
  );
}

export default SongList;
