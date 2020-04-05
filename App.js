import React, { useState, useEffect } from 'react';
import { MainScreen, PlayScreen } from './lib/screens'
import { getSpotifyToken } from '@/services/spotify';

const App = () => {
  const [auth, setAuth] = useState('');
  const [songs, setSongs] = useState(null);
  useEffect(() => {
    getSpotifyToken(setAuth);
  }, []);
  return (
    songs ?
      <PlayScreen songs={songs}/> :
      <MainScreen token={auth} setSongs={setSongs}/>
  );
}

export default App;
