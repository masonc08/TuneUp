import { ENV } from '~/config';


const searchPlaylists = (token, value, setResults) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch(ENV + "v1/spotify/playlist_search?key=" + token + "&q=" + value, requestOptions)
    .then(response => response.json())
    .then(result => {
      const items = result.playlists;
      setResults(items);
    })
    .catch(error => console.error('Failed to query: ', error));
}


export { searchPlaylists };