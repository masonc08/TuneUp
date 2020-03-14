import { ENV } from '~/config';


const getSpotifyToken = setAuth => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch(ENV + "v1/spotify/authorize", requestOptions)
    .then(response => response.text())
    .then(result => setAuth(JSON.parse(result).access_token))
    .catch(error => console.log('error', error));
};

export { getSpotifyToken };