import React, { useState, useEffect } from 'react';
import { MainScreen } from './lib/screens'
import { getSpotifyToken } from '@/services/spotify';

const App = () => {
  const [auth, setAuth] = useState('');
  useEffect(() => {
    getSpotifyToken(setAuth);
  }, []);
  return (
    <MainScreen token={auth}/>
  );
}

export default App;
