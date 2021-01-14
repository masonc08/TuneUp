import { ENV } from '~/config';


const getSpotifyToken = setAuth => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch(ENV + "v1/spotify/authorize", requestOptions)
    .then(response => response.json())
    .then(result => {
      const token = result.access_token;
      setAuth(token);
      console.log('Successfully authenticated with token: ' + token);
    })
    .catch(error => console.error('Failed to authenticate: ', error));
};

export { getSpotifyToken };