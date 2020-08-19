import { ENV } from '~/config';


export const getSongsFromPlaylist = async (token, id) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  try {
    const response = await fetch(ENV + "v1/spotify/get_playlist?key=" + token + "&id=" + id, requestOptions)
    return response.json();
  } catch(error) {
    console.log('error', error);
  }
};

